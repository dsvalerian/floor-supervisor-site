import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";
import {getExtension} from "@sanity/asset-utils";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "audio",
    type: "file",
    title: options.title || "Audio File",
    description: options.description,
    validation: (rule) =>
      rule.custom((value) => {
        if (options.required && !value) {
          return `${options.title || "Audio File"} is required`;
        } else if (!value) {
          return true;
        }

        if (!value?.asset?._ref) {
          return "Must provide a valid audio file.";
        }

        const filetype = getExtension(value.asset._ref);

        if (!["mp3", "wav", "ogg", "oga"].includes(filetype)) {
          return "Must provide a valid audio file.";
        }

        return true;
      }),
  });
