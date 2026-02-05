import {defineField} from "sanity";

export default (required: boolean = false) =>
  defineField({
    name: "textColor",
    type: "string",
    title: "Text Color",
    options: {
      list: [
        {value: "light", title: "Light"},
        {value: "dark", title: "Dark"},
      ],
    },
    initialValue: "light",
    validation: (rule) => (required ? rule.required() : rule),
  });
