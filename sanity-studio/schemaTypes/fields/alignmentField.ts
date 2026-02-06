import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "alignment",
    type: "string",
    title: options.title || "Alignment",
    description: options.description,
    options: {
      list: [
        {value: "left", title: "Left"},
        {value: "center", title: "Center"},
        {value: "right", title: "Right"},
      ],
    },
    initialValue: "left",
    validation: (rule) => (options.required ? rule.required() : rule),
  });
