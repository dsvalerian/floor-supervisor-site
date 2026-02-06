import {defineField} from "sanity";
import {FieldOptions} from "../../types/util.types";

export default (options: FieldOptions = {}) =>
  defineField({
    name: options.name || "textColor",
    type: "string",
    title: options.title || "Text Color",
    description: options.description,
    options: {
      list: [
        {value: "light", title: "Light"},
        {value: "dark", title: "Dark"},
      ],
    },
    initialValue: "light",
    validation: (rule) => (options.required ? rule.required() : rule),
  });
