import alignmentField from "../fields/alignmentField";
import backgroundField from "../fields/backgroundField";
import textField from "../fields/textField";
import textColorField from "../fields/textColorField";
import {defineField} from "sanity";

const label = {
  name: "label",
  type: "object",
  title: "Label",
  description: "The label that appears in the top corner of the post.",
  fields: [
    textField("text", "Text", undefined, true),
    alignmentField(true),
    textColorField(true),
    backgroundField(true),
  ],
};

const category = defineField({
  name: "category",
  type: "string",
  title: "Category",
  description: "The category of the post. Used for filtering/sorting/etc.",
  validation: (rule) => rule.required(),
});

export default {
  name: "postDetails",
  type: "object",
  title: "Post Details",
  description: "Define some details about this post.",
  fields: [category, label],
  options: {
    collapsible: true,
  },
};
