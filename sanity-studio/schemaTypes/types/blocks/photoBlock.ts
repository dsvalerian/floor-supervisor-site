import {defineArrayMember, defineType} from "sanity";
import {blockDetailsField} from "../common/blockDetails";

export default defineType({
  name: "photoBlock",
  type: "object",
  title: "Photo Block",
  description: "A list of one or more photos that are displayed in their entirety.",
  fields: [
    blockDetailsField,
    {
      name: "photos",
      type: "array",
      title: "Photos",
      description: "Upload photos to be displayed in their entirety.",
      of: [defineArrayMember({type: "imageInfo"})],
    },
  ],
});
