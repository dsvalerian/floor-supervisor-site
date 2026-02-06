import {defineField} from "sanity";

export const basePostFields = [
  defineField({
    name: "postTitle",
    type: "string",
    title: "Post Label",
    initialValue: "Release",
  }),
  defineField({
    name: "postTitleAlignment",
    type: "string",
    title: "Post Label Alignment",
    options: {
      list: [
        {value: "left", title: "Left"},
        {value: "right", title: "Right"},
      ],
    },
    initialValue: "left",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "postCategory",
    type: "string",
    title: "Post Category",
    description: "The category of the post. Used for the filter menu.",
    initialValue: "music",
    options: {
      list: [
        {value: "music", title: "Music"},
        {value: "events", title: "Events"},
      ],
    },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "backgroundColor",
    type: "color",
    title: "Background Color",
    description: "The background color of the post.",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "textColor",
    type: "string",
    title: "Text Color",
    description: "The base color of the text in the post.",
    options: {
      list: [
        {value: "dark", title: "Dark"},
        {value: "light", title: "Light"},
      ],
    },
    initialValue: "dark",
    validation: (rule) => rule.required(),
  }),
];
