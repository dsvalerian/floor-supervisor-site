import {defineField, defineType} from "sanity";
import {postDetailsField} from "../types/common/postDetails";

export const textPost = defineType({
  name: "textPost",
  type: "document",
  title: "Text Post",
  fields: [postDetailsField, defineField({name: "content", type: "textBlock", title: "Content"})],
});
