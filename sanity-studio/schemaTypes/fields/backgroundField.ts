import {defineField} from "sanity";

export default (required: boolean = false) =>
  defineField({
    name: "background",
    type: "color",
    title: "Background",
    options: {
      collapsible: false,
    },
    validation: (rule) => (required ? rule.required() : rule),
  });
