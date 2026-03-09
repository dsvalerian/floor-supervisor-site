import type { Post } from "../types/sanity.types";
import { getSanityClient } from "./sanityClient";

type QueryResult = Post;

const allPostsQuery = `*[_type == "post"] {
		...,
		"background": background.hex,
		"labelBackground": labelBackground.hex,
		"blocks": blocks[]{
			...,
			"blockColors": {
				...blockColors,
				"background": {
					"type": blockColors.background.type,
					"color": blockColors.background.color,
					"image": blockColors.background.image{
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
	}`;

export const getAllPosts = async () => {
	console.info("Getting all posts");
	const result = await getSanityClient().fetch<QueryResult[]>(allPostsQuery);
	console.info(`Fetched ${result.length} post(s)`);
	console.dir(result, { depth: 7 });
	return result;
};
