import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "multilineText",
    type: "text",
    title: options.title || "Text",
    description: options.description,
    validation: (rule) => (options.required ? rule.required() : rule),
  });
