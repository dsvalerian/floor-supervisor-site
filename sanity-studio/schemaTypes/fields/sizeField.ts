import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "size",
    type: "string",
    title: options.title || "Size",
    description: options.description,
    options: {
      list: [
        {value: "small", title: "Small"},
        {value: "medium", title: "Medium"},
        {value: "large", title: "Large"},
      ],
    },
    initialValue: "small",
    validation: (rule) => (options.required ? rule.required() : rule),
  });
