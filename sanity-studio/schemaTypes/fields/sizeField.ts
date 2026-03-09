import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";

export default ({
  name,
  title,
  description,
  required,
  defaultValue,
}: FieldOptions & {defaultValue?: "small" | "medium" | "large"} = {}) =>
  defineField({
    name: name || "size",
    type: "string",
    title: title || "Size",
    description: description,
    options: {
      list: [
        {value: "small", title: "Small"},
        {value: "medium", title: "Medium"},
        {value: "large", title: "Large"},
      ],
      layout: "radio",
    },
    initialValue: defaultValue || "small",
    validation: (rule) => (required ? rule.required() : rule),
  });
