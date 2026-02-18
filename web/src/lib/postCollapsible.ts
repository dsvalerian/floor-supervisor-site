// This file is a small client-side controller for the collapsible post UI.
// It is loaded from PostWrapper.astro via <script src="..."> so it runs in the browser.

type InitOptions = {
	// CSS custom property (on the collapsible root element) that defines the
	// collapsed max-height, e.g. "--postCollapseHeight".
	collapseVar?: string;
	// Prefix for sessionStorage key. The rest of the key is the post id.
	storagePrefix?: string;
};

const DEFAULTS: Required<InitOptions> = {
	collapseVar: "--postCollapseHeight",
	storagePrefix: "postExpanded:",
};

// If the PostWrapper passes a `postId`, it is stored on the nearest ancestor
// with [data-post-id]. If missing, persistence is disabled (still collapses).
const getStorageKey = (root: HTMLElement, storagePrefix: string): string | null => {
	const article = root.closest("[data-post-id]");
	const postId = article?.getAttribute("data-post-id");
	if (!postId) return null;
	return `${storagePrefix}${postId}`;
};

const getCollapseHeightPx = (root: HTMLElement, collapseVar: string): number | null => {
	const raw = getComputedStyle(root).getPropertyValue(collapseVar).trim();
	const px = Number.parseFloat(raw);
	return Number.isFinite(px) ? px : null;
};

// Data attribute contract (set on the collapsible root element):
// - data-collapsible="true|false"  => whether the inner content overflows the collapsed height
// - data-expanded="true|false"     => whether the post is currently expanded
const initRoot = (root: HTMLElement, options: Required<InitOptions>): void => {
	const inner = root.querySelector("[data-post-collapsible-inner]");
	const toggle = root.querySelector("[data-post-collapsible-toggle]");
	if (!(inner instanceof HTMLElement) || !(toggle instanceof HTMLButtonElement)) return;

	const applyState = (): void => {
		const maxHeightPx = getCollapseHeightPx(root, options.collapseVar);
		if (!maxHeightPx) return;

		// If content doesn't overflow, we mark it non-collapsible and force expanded.
		const isOverflowing = inner.scrollHeight > maxHeightPx + 1;
		root.dataset.collapsible = isOverflowing ? "true" : "false";

		if (!isOverflowing) {
			root.dataset.expanded = "true";
			toggle.setAttribute("aria-expanded", "true");
			return;
		}

		// Persistence: if `postId` exists, store/read expanded state in sessionStorage.
		const storageKey = getStorageKey(root, options.storagePrefix);
		const persistedExpanded = storageKey ? sessionStorage.getItem(storageKey) === "true" : false;
		root.dataset.expanded = persistedExpanded ? "true" : "false";
		toggle.setAttribute("aria-expanded", persistedExpanded ? "true" : "false");
	};

	const update = (): void => {
		requestAnimationFrame(applyState);
	};

	update();

	// Recalculate on resize/breakpoints/content changes.
	const observer = new ResizeObserver(update);
	observer.observe(root);

	toggle.addEventListener("click", () => {
		if (root.dataset.collapsible !== "true") return;
		const nextExpanded = root.dataset.expanded !== "true";

		root.dataset.expanded = nextExpanded ? "true" : "false";
		toggle.setAttribute("aria-expanded", nextExpanded ? "true" : "false");

		const storageKey = getStorageKey(root, options.storagePrefix);
		if (storageKey) sessionStorage.setItem(storageKey, nextExpanded ? "true" : "false");
	});
};

export const initPostCollapsibles = (opts: InitOptions = {}): void => {
	const options: Required<InitOptions> = { ...DEFAULTS, ...opts };
	const roots = document.querySelectorAll<HTMLElement>("[data-post-collapsible]");
	for (const root of roots) initRoot(root, options);
};

initPostCollapsibles();
