import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";
import {getExtension} from "@sanity/asset-utils";

export default (
  {options, hotspotPreviews}: {options: FieldOptions; hotspotPreviews?: {title: string; aspectRatio: number}[]} = {
    options: {},
    hotspotPreviews: [],
  },
) =>
  defineField({
    name: options?.name || "imageField",
    type: "image",
    title: options?.title || "Image",
    description: options?.description,
    options: {
      hotspot: {
        previews: hotspotPreviews || [
          {title: "Landscape", aspectRatio: 16 / 9},
          {title: "Thin", aspectRatio: 3 / 1},
          {title: "Portrait", aspectRatio: 4 / 5},
          {title: "Square", aspectRatio: 1 / 1},
        ],
      },
    },
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
