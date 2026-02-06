import {defineType} from "sanity";
import alignmentField from "../../fields/alignmentField";
import multilineTextField from "../../fields/multilineTextField";
import sizeField from "../../fields/sizeField";
import {blockDetailsField} from "../common/blockDetails";

export const textBlock = defineType({
  name: "textBlock",
  type: "object",
  title: "Text Block",
  description: "A customizable block of text. Good for titles, paragraphs, etc.",
  fields: [
    blockDetailsField,
    multilineTextField({required: true}),
    sizeField({required: true}),
    alignmentField({required: true}),
  ],
});
