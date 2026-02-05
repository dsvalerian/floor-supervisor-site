import {defineType} from "sanity";
import alignmentField from "../fields/alignmentField";
import multilineTextField from "../fields/multilineTextField";
import sizeField from "../fields/sizeField";
import blockDetails from "../objects/blockDetails";

export default defineType({
  name: "textBlock",
  type: "object",
  title: "Text Block",
  description: "A customizable block of text. Good for titles, paragraphs, etc.",
  fields: [blockDetails, multilineTextField(true), sizeField(true), alignmentField(true)],
  preview: {
    select: {
      text: "multilineText",
      size: "size",
    },
    prepare({text, size}) {
      return {
        title: text ? text.substring(0, 20) + (text.length > 20 ? "..." : "") : "Text Block",
        subtitle: `Size: ${size || "small"}`,
      };
    },
  },
});
