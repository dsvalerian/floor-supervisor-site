import {defineField} from "sanity";

export const basePostFields = [
  defineField({
    name: "postTitle",
    type: "string",
    title: "Post Title",
    initialValue: "Release",
  }),
  defineField({
    name: "postTitleAlignment",
    type: "string",
    title: "Post Title Alignment",
    options: {
      list: [
        {value: "left", title: "Left"},
        {value: "right", title: "Right"},
      ],
    },
    validation: (rule) => rule.required().error("Must provide a post title alignment for this post."),
  }),
  defineField({
    name: "postCategory",
    type: "string",
    title: "Post Category",
    description: "The category of the post. Used for filter menu.",
    initialValue: "Music",
    validation: (rule) => rule.required().error("Must provide a category for this post."),
  }),
  defineField({
    name: "backgroundColor",
    type: "color",
    title: "Background Color",
    description: "The background color of the post.",
    validation: (rule) => rule.required().error("Must provide a background for this post."),
  }),
];
