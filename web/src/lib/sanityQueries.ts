import { sanityClient } from "sanity:client";
import type { Post } from "../types/sanityTypes";

const allPostsQuery = `*[_type in ["musicPost", "eventPost"]] {
		...,
		"backgroundColor": coalesce(backgroundColor.hex, backgroundImage.asset->url, "#000000"),
		
		// Music post specific fields
		_type == "musicPost" => {
			"releaseCoverArt": releaseCoverArt.asset->url,
			"trackInfos": trackInfos[]{
				"trackFile": trackFile.asset->url,
				trackArtist,
				trackName
			}
		},
		
		// Event post specific fields  
		_type == "eventPost" => {
			"eventInfos": eventInfos[]
		}
	}`;

export const getAllPosts = async () => {
	console.info("Getting all posts");
	const result = await sanityClient.fetch<Post[]>(allPostsQuery);
	console.info(`Fetched ${result.length} post(s)`, result);
	return result;
};
