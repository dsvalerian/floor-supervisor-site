import {defineType, StringRule} from "sanity";

export default (required: boolean = false) =>
  defineType({
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
    validation: (rule: StringRule) => (required ? rule.required() : rule),
  });
