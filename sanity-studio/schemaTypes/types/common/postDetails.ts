import {defineField, defineType} from "sanity";
import alignmentField from "../../fields/alignmentField";
import backgroundField from "../../fields/backgroundField";
import textColorField from "../../fields/textColorField";
import textField from "../../fields/textField";

const label = {
  name: "label",
  type: "object",
  title: "Label",
  description: "The label that appears in the top corner of the post.",
  fields: [
    textField({required: true}),
    alignmentField({required: true}),
    textColorField({required: true}),
    backgroundField({required: true}),
  ],
};

export const postDetails = defineType({
  name: "postDetails",
  type: "object",
  title: "Post Details",
  description: "Define some details about this post.",
  fields: [
    textField({
      name: "category",
      title: "Category",
      description: "The category of the post. Used for filtering with similar posts.",
      required: true,
    }),
    label,
  ],
  options: {
    collapsible: true,
  },
});

export const postDetailsField = defineField({
  name: "postDetails",
  type: "postDetails",
  title: "Post Details",
});
