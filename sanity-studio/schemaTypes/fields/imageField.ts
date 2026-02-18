import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";
import {getExtension} from "@sanity/asset-utils";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "image",
    type: "image",
    title: options.title || "Image",
    description: options.description,
    validation: (rule) =>
      rule.custom((value) => {
        if (options.required && !value) {
          return `${options.title || "Image"} is required`;
        } else if (!value) {
          return true;
        }

        if (!value?.asset?._ref) {
          return "Must provide a valid image file.";
        }

        const filetype = getExtension(value.asset._ref);

        if (!["jpg", "jpeg", "png", "webp", "avif", "svg"].includes(filetype)) {
          return "Must provide a valid image file.";
        }

        return true;
      }),
  });
