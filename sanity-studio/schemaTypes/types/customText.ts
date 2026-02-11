import {defineType} from "sanity";
import multilineTextField from "../fields/multilineTextField";
import sizeField from "../fields/sizeField";
import alignmentField from "../fields/alignmentField";

export const customText = defineType({
  name: "customText",
  type: "object",
  title: "Custom Text",
  description: "A text field with customizable size and alignment.",
  fields: [
    multilineTextField({name: "text", title: "Text", required: true}),
    sizeField({name: "textSize", title: "Text Size", required: true}),
    alignmentField({name: "textAlignment", title: "Text Alignment", required: true}),
  ],
});
