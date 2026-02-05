import {defineField} from "sanity";

export default (required: boolean = false) =>
  defineField({
    name: "size",
    type: "string",
    title: "Size",
    options: {
      list: [
        {value: "small", title: "Small"},
        {value: "medium", title: "Medium"},
        {value: "large", title: "Large"},
      ],
    },
    initialValue: "small",
    validation: (rule) => (required ? rule.required() : rule),
  });
