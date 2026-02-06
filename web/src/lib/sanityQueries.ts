import { sanityClient } from "sanity:client";
import type { CustomPost, TextPost } from "../types/sanity.types";

type QueryResult = CustomPost | TextPost;

const allPostsQuery = `*[_type in ["customPost", "textPost"]] {
		...,
		"postDetails": {
			...postDetails,
			"background": coalesce(postDetails.background.hex, postDetails.backgroundImage.asset->url, "#000000"),
			"label": {
				...postDetails.label,
				"background": coalesce(postDetails.label.background.hex, postDetails.label.backgroundImage.asset->url, "#000000"),
			}
		},
		
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
	const result = await sanityClient.fetch<QueryResult[]>(allPostsQuery);
	console.info(`Fetched ${result.length} post(s)`, result);
	return result;
};
