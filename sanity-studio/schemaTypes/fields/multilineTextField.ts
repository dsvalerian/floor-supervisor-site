import {defineField} from "sanity";

export default (required: boolean = false) =>
  defineField({
    name: "multilineText",
    type: "text",
    title: "Text",
    validation: (rule) => (required ? rule.required() : rule),
  });
