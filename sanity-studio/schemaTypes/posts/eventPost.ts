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
      name: "title",
      type: "string",
      title: "Title",
      description: "An optional title for the post, displayed at the top.",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "An optional description for the post, displayed at the top under the title.",
    }),
    defineField({
      name: "events",
      type: "array",
      title: "Events",
      of: [
        defineArrayMember({
          name: "event",
          type: "object",
          title: "Event Details",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Name",
              description: "The name of the event.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "dateTime",
              type: "object",
              title: "Date & Time",
              description: "When the event is happening.",
              fields: [
                defineField({
                  name: "date",
                  type: "date",
                  title: "Date",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "startTime",
                  type: "timeValue",
                  title: "Start Time",
                }),
                defineField({
                  name: "endTime",
                  type: "timeValue",
                  title: "End Time",
                }),
              ],
              options: {
                columns: 3,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "location",
              type: "string",
              title: "Location",
              description: "Where the event is happening.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
              description: "An optional description where you can add any additional details about the event.",
            }),
          ],
        }),
      ],
    }),
  ],
});
