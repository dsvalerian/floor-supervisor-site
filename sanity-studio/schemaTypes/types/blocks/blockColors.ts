import {defineField, defineType} from "sanity";
import backgroundField from "../../fields/backgroundField";
import imageField from "../../fields/imageField";

export const blockDetails = defineType({
  name: "blockColors",
  type: "object",
  title: "Block Details",
  description: "Override the color/background of the post for this block only.",
  fields: [
    defineField({
      name: "textColor",
      type: "string",
      title: "Text Color",
      description: "Override the text color for this block only.",
      options: {
        list: [
          {value: "inherit", title: "Use post color"},
          {value: "light", title: "Light"},
          {value: "dark", title: "Dark"},
        ],
        layout: "radio",
      },
      initialValue: "inherit",
    }),
    defineField({
      name: "background",
      type: "object",
      title: "Background",
      description: "Override the background for this block only.",
      fields: [
        defineField({
          name: "type",
          type: "string",
          title: "Background Type",
          options: {
            list: [
              {title: "Use post color", value: "transparent"},
              {title: "Color", value: "color"},
              {title: "Image", value: "image"},
            ],
            layout: "radio",
          },
          initialValue: "transparent",
          validation: (rule) => rule.required(),
        }),
        {
          ...backgroundField({name: "color", title: "Color"}),
          hidden: ({parent}) => parent?.type !== "color",
        },
        {
          ...imageField({options: {name: "image", title: "Image"}}),
          hidden: ({parent}) => parent?.type !== "image",
        },
      ],
      options: {
        collapsible: false,
        columns: 2,
      },
      validation: (rule) =>
        rule.custom((value) => {
          if (!value) {
            return "Background is required";
          }

          if (value?.type === "color") {
            return value?.color ? true : "Background color is required";
          }

          if (value?.type === "image") {
            const imageValue = value?.image as {asset?: {_ref?: string}} | undefined;
            return imageValue?.asset?._ref ? true : "Background image is required";
          }

          if (value?.type === "transparent") {
            return true;
          }

          return "Select a background type";
        }),
    }),
  ],
});

export const blockDetailsField = defineField({
  name: "blockColors",
  type: "blockColors",
  title: "Block Colors",
});
