import { sanityClient } from "sanity:client";
import type { CustomPost, TextPost } from "../types/sanity.types";

type QueryResult = CustomPost | TextPost;

const allPostsQuery = `*[_type in ["customPost", "textPost", "eventsPost"]] {
		...,
		"postDetails": {
			...postDetails,
			"background": coalesce(postDetails.background.hex, postDetails.backgroundImage.asset->url, "#000000"),
			"label": {
				...postDetails.label,
				"background": coalesce(postDetails.label.background.hex, postDetails.label.backgroundImage.asset->url, "#000000"),
			}
		},
		
		// Custom post specific fields - transform block backgrounds
		_type == "customPost" => {
			"blocks": blocks[]{
				...,
				"blockDetails": {
					...blockDetails,
					"background": coalesce(blockDetails.background.hex, "transparent")
				},
				_type == "musicBlock" => {
					"coverArt": coverArt.asset->url,
					"musicTracks": musicTracks[]{
						...,
						"audioFile": audioFile.asset->url
					}
				},
				_type == "photoBlock" => {
					"photos": photos[]{
						...,
						"url": image.asset->url
					}
				}
			}
		},
		
		// Text post specific fields - transform content block background
		_type == "textPost" => {
			"content": {
				...content,
				"blockDetails": {
					...content.blockDetails,
					"background": coalesce(content.blockDetails.background.hex, "transparent")
				}
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
	console.info(`Fetched ${result.length} post(s)`);
	console.dir(result, { depth: 7 });
	return result;
};
