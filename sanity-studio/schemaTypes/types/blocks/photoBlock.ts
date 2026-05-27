import {defineArrayMember, defineType} from "sanity";

export default defineType({
  name: "photoBlock",
  type: "object",
  title: "Photo Block",
  description: "A list of one or more photos that are displayed in their entirety.",
  fields: [
    {
      name: "photos",
      type: "array",
      title: "Photos",
      description: "Upload photos to be displayed in their entirety.",
      of: [defineArrayMember({type: "imageInfo"})],
    },
  ],
  preview: {
    select: {
      photos: "photos",
    },
    prepare({photos}: {photos?: {_type: "photos"}[]}) {
      return {
        title: "Photo Block",
        subtitle: `${photos?.length || 0} photo(s)`,
      };
    },
  },
});
