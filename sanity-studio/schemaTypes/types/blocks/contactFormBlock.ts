import {defineType} from "sanity";
import textField from "../../fields/textField";
import {blockDetailsField} from "../common/blockDetails";

export const contactFormBlock = defineType({
  name: "contactFormBlock",
  type: "object",
  title: "Contact Form Block",
  description: "A basic contact form.",
  fields: [
    blockDetailsField,
    textField({
      name: "title",
      title: "Title",
      required: false,
      description: "An optional title for the contact form block.",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({title}: {title?: string}) {
      return {
        title: "Contact Form Block",
        subtitle: title && `${title}`,
      };
    },
  },
});
