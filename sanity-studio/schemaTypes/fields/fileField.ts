import {defineField} from "sanity";

export default (name: string = "file", title: string = "File", description?: string, required: boolean = false) =>
  defineField({
    name: name,
    type: "file",
    title: title,
    description: description || undefined,
    validation: (rule) => (required ? rule.required() : rule),
  });
