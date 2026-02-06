import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "file",
    type: "file",
    title: options.title || "File",
    description: options.description,
    validation: (rule) => (options.required ? rule.required() : rule),
  });
