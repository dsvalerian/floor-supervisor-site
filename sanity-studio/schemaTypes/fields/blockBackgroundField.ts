import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";
import backgroundField from "./backgroundField";
import imageField from "./imageField";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "background",
    type: "object",
    title: options.title || "Background",
    description: options.description,
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
        validation: (rule) => (options.required ? rule.required() : rule),
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
          return options.required ? "Background is required" : true;
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
  });
