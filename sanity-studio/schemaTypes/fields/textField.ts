import {defineField} from "sanity";

export default (name: string = "text", title: string = "Text", description?: string, required: boolean = false) =>
  defineField({
    name: name,
    type: "string",
    title: title,
    description: description || undefined,
    validation: (rule) => (required ? rule.required() : rule),
  });
