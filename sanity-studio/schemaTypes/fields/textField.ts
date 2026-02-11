import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";

export const textField = (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "text",
    type: "string",
    title: options.title || "Text",
    description: options.description,
    validation: (rule) => (options.required ? rule.required() : rule),
  });
