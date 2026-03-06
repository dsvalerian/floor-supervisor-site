import { sanityClient } from "sanity:client";
import type { CustomPost } from "../types/sanity.types";

type QueryResult = CustomPost;

const allPostsQuery = `*[_type in ["customPost"]] {
		...,
		"postDetails": {
			...postDetails,
			"background": coalesce(postDetails.background.hex, postDetails.backgroundImage.asset->url, "#000000"),
			"labelBackground": coalesce(postDetails.labelBackground.hex, postDetails.labelBackground, "#000000"),
		},
		
		// Custom post specific fields - transform block backgrounds
		_type == "customPost" => {
			"blocks": blocks[]{
				...,
				"blockDetails": {
					...blockDetails,
					"background": {
						"type": blockDetails.background.type,
						"color": blockDetails.background.color,
						"image": blockDetails.background.image{
							...,
							"url": asset->url
						}
					}
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
		}
	}`;

export const getAllPosts = async () => {
	console.info("Getting all posts");
	const result = await sanityClient.fetch<QueryResult[]>(allPostsQuery);
	console.info(`Fetched ${result.length} post(s)`);
	console.dir(result, { depth: 7 });
	return result;
};
