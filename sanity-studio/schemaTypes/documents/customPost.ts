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
};
