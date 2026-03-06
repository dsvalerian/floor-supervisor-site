import {defineField, defineType} from "sanity";
import alignmentField from "../../fields/alignmentField";
import backgroundField from "../../fields/backgroundField";
import textColorField from "../../fields/textColorField";
import textField from "../../fields/textField";

export const postDetails = defineType({
  name: "postDetails",
  type: "object",
  title: "Post Details",
  description: "Define some details about this post.",
  fieldsets: [
    {
      name: "label",
      description: "Customize this post's label.",
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    textField({
      name: "category",
      title: "Post Category",
      description: "The category of the post. Used for filtering with similar posts.",
      required: true,
    }),
    backgroundField({title: "Post Background", required: true}),
    {...textField({title: "Label Text", required: true}), fieldset: "label"},
    {...alignmentField({title: "Label Alignment", required: true}), fieldset: "label"},
    {...textColorField({name: "labelTextColor", title: "Label Text Color", required: true}), fieldset: "label"},
    {...backgroundField({name: "labelBackground", title: "Label Background", required: true}), fieldset: "label"},
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
