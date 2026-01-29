import {defineArrayMember, defineField, defineType} from "sanity";
import {basePostFields} from "./basePost";

export const eventPost = defineType({
  name: "eventPost",
  type: "document",
  preview: {
    select: {
      title: "postTitle",
    },
  },
  fields: [
    ...basePostFields,
    defineField({
      name: "eventInfos",
      type: "array",
      title: "Events",
      of: [
        defineArrayMember({
          name: "eventInfo",
          type: "object",
          title: "Event Info",
          fields: [
            defineField({
              name: "eventName",
              type: "string",
              title: "Event Name",
              description: "The name of the event to appear in the listing.",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
