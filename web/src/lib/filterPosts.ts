import { selectedCategories } from "../stores/categoriesStore";

const normalize = (str: string) => str.toLowerCase().trim();

export const initPostFiltering = () => {
	const allPosts = Array.from(document.querySelectorAll<HTMLElement>("[data-post-category]"));

	const updatePosts = (categories: readonly string[]) => {
		const selected = categories.map(normalize);

		allPosts.forEach(post => {
			const normalizedCategory = normalize(post.dataset.postCategory || "");
			const shouldShow = selected.length > 0 && selected.includes(normalizedCategory);
			post.style.display = shouldShow ? "" : "none";
		});
	};

	selectedCategories.subscribe(updatePosts);
};
