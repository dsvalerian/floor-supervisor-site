import { createClient } from "@sanity/client";

export const getSanityClient = () => {
	const preview = import.meta.env.SANITY_PREVIEW === "true";

	return createClient({
		projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
		dataset: import.meta.env.PUBLIC_SANITY_DATASET,
		apiVersion: "2024-01-01",
		useCdn: !preview,
		perspective: preview ? "previewDrafts" : "published",
		token: preview ? import.meta.env.SANITY_PREVIEW_TOKEN : undefined,
	});
};
