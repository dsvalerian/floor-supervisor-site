import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "background",
    type: "color",
    title: options.title || "Background",
    description: options.description,
    options: {
      collapsible: false,
    },
    validation: (rule) => (options.required ? rule.required() : rule),
  });
