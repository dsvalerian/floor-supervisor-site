import { sanityClient } from "sanity:client";
import type { Post } from "../types/sanityTypes";

const musicPostQuery = `*[_type in ["musicPost"]] {
		...,
		"background": coalesce(backgroundColor.hex, backgroundImage.asset->url, "#000000"),
		"releaseCoverArt": releaseCoverArt.asset->url,
		"trackInfos": trackInfos[]{
			"trackFile": trackFile.asset->url,
			trackArtist,
			trackName
		}
	}`;

export const getAllPosts = async () => {
	console.info("Getting all posts");
	const result = await sanityClient.fetch<Post[]>(musicPostQuery);
	console.info(`Fetched ${result.length} post(s)`, result);
	return result;
};
