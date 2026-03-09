import {defineArrayMember} from "sanity";
import textField from "../fields/textField";
import textColorField from "../fields/textColorField";
import backgroundField from "../fields/backgroundField";
import alignmentField from "../fields/alignmentField";

export const post = {
  name: "post",
  type: "document",
  title: "Post",
  fieldsets: [
    {
      name: "label",
      description: "Customize this post's label.",
      options: {
        columns: 2,
      },
    },
    {
      name: "colors",
      description: "Default colors for text/background in the post. Can be overriden in content blocks.",
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    textField({
      name: "category",
      title: "Category",
      description: "The category of the post. Used for filtering with similar posts.",
      required: true,
    }),
    {...textColorField({title: "Text Color", required: true}), fieldset: "colors"},
    {...backgroundField({title: "Background Color", required: true}), fieldset: "colors"},
    {...textField({name: "labelText", title: "Label Text", required: true}), fieldset: "label"},
    {...alignmentField({name: "labelAlignment", title: "Label Alignment", required: true}), fieldset: "label"},
    {...textColorField({name: "labelTextColor", title: "Label Text Color", required: true}), fieldset: "label"},
    {...backgroundField({name: "labelBackground", title: "Label Background", required: true}), fieldset: "label"},
    {
      name: "blocks",
      type: "array",
      title: "Content Blocks",
      description: "Use a combination of content blocks to build your post.",
      of: [
        defineArrayMember({type: "textBlock"}),
        defineArrayMember({type: "eventsBlock"}),
        defineArrayMember({type: "musicBlock"}),
        defineArrayMember({type: "photoBlock"}),
        defineArrayMember({type: "contactFormBlock"}),
      ],
    },
  ],
  preview: {
    select: {
      category: "category",
      blocks: "blocks",
      createdAt: "_createdAt",
    },
    prepare({category, blocks, createdAt}: {category?: string; blocks?: {_type: "array"}[]; createdAt?: string}) {
      const createdAtLabel = createdAt ? new Date(createdAt).toLocaleDateString() : "";
      return {
        title: `Post${category ? ` - ${category}` : ""}`,
        subtitle: `${blocks?.length || 0} block(s)` + `${createdAtLabel ? ` - ${createdAtLabel}` : ""}`,
      };
    },
  },
};
