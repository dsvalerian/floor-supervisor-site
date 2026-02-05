import {defineField} from "sanity";

export default (required: boolean = false) =>
  defineField({
    name: "alignment",
    type: "string",
    title: "Alignment",
    options: {
      list: [
        {value: "left", title: "Left"},
        {value: "center", title: "Center"},
        {value: "right", title: "Right"},
      ],
    },
    initialValue: "left",
    validation: (rule) => (required ? rule.required() : rule),
  });
