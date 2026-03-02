import {defineField, defineType} from "sanity";
import backgroundMediaField from "../../fields/backgroundMediaField";
import textColorField from "../../fields/textColorField";

export const blockDetails = defineType({
  name: "blockDetails",
  type: "object",
  title: "Block Details",
  description: "Change the text color and background for this block.",
  fields: [textColorField({required: false}), backgroundMediaField({required: true})],
  options: {
    collapsible: true,
    collapsed: true,
  },
});

export const blockDetailsField = defineField({
  name: "blockDetails",
  type: "blockDetails",
  title: "Block Details",
});
