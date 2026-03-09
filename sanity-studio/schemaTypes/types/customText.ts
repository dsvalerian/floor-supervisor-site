import {defineType} from "sanity";
import multilineTextField from "../fields/multilineTextField";
import sizeField from "../fields/sizeField";
import alignmentField from "../fields/alignmentField";

export const customText = defineType({
  name: "customText",
  type: "object",
  title: "Text",
  description: "A text field with customizable size and alignment.",
  fieldsets: [
    {
      name: "textLayout",
      title: "Layout",
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    multilineTextField({name: "text", title: "Text", required: true}),
    {...sizeField({name: "textSize", title: "Text Size", required: true}), fieldset: "textLayout"},
    {...alignmentField({name: "textAlignment", title: "Text Alignment", required: true}), fieldset: "textLayout"},
  ],
  preview: {
    select: {
      text: "text",
      size: "textSize",
      alignment: "textAlignment",
    },
    prepare({text, size, alignment}: {text?: string; size?: string; alignment?: string}) {
      const textPreviewLength = 20;
      const textPreview =
        (text && (text?.length > textPreviewLength ? `${text.slice(0, textPreviewLength)}...` : text)) || "none";
      return {
        title: textPreview,
        subtitle: `${alignment} - ${size}`,
      };
    },
  },
});
