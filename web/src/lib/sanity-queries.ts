import { sanityClient } from "sanity:client";
import type { Post } from "../types/sanity";

export const getAllPosts = async () => {
	console.info("Getting all posts");
	const result = await sanityClient.fetch<Post[]>(
		'*[_type in ["singleTrackPost"]] {..., "background": coalesce(backgroundColor.hex, backgroundImage.asset->url, "#000000")}'
	);
	console.info(`Fetched ${result.length} post(s)`);
	return result;
};
