import {defineArrayMember, defineType} from "sanity";
import {blockDetailsField} from "../common/blockDetails";

export const textBlock = defineType({
  name: "textBlock",
  type: "object",
  title: "Text Block",
  description: "A customizable block of text. Good for titles, paragraphs, etc.",
  fields: [
    blockDetailsField,
    {
      name: "customTexts",
      type: "array",
      title: "Custom Texts",
      description: "Define one or more custom text objects.",
      of: [defineArrayMember({type: "customText"})],
    },
  ],
  preview: {
    select: {
      texts: "customTexts",
    },
    prepare({texts}: {texts?: {text?: string}[]}) {
      const textPreviewLength = 20;
      const firstText = texts?.[0]?.text?.trim() ?? "";
      const textPreview =
        firstText.length > textPreviewLength ? `${firstText.slice(0, textPreviewLength)}...` : firstText;
      return {
        title: "Text Block",
        subtitle: `${texts?.length || 0} text(s) - ${textPreview}`,
      };
    },
  },
});
