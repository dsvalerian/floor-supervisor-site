import { defineField, defineType } from "sanity";

export const singleTrackPost = defineType({
	name: "singleTrackPost",
	type: "document",
	fields: [
		defineField({
			name: "postTitle",
			type: "string",
			title: "Post Title",
			initialValue: "Release",
		}),
		defineField({
			name: "postCategory",
			type: "string",
			title: "Post Category",
			description: "The category of the post. Used for filter menu.",
			initialValue: "Music",
			validation: (rule) =>
				rule.required().error("Must provide a category for this post."),
		}),
		defineField({
			name: "backgroundColor",
			type: "color",
			title: "Background Color",
			description: "The background color of the post.",
		}),
		defineField({
			name: "trackTitle",
			type: "string",
			title: "Track Title",
			validation: (rule) =>
				rule.required().error("Must provide a title for the track."),
		}),
		defineField({
			name: "trackUrl",
			type: "string",
			title: "Track URL",
			validation: (rule) =>
				rule.required().error("Must provide a URL to stream the track from."),
		}),
	],
});
