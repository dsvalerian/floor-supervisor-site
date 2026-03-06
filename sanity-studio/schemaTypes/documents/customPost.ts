import {defineArrayMember} from "sanity";
import {postDetailsField} from "../types/common/postDetails";

export const customPost = {
  name: "customPost",
  type: "document",
  title: "Custom Post",
  fields: [
    postDetailsField,
    {
      name: "blocks",
      type: "array",
      title: "Content",
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
      category: "postDetails.category",
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
