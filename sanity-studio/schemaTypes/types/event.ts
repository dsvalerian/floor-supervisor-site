import {defineType} from "sanity";
import textField from "../fields/textField";

export const eventDetails = defineType({
  name: "event",
  type: "object",
  title: "Event",
  fieldsets: [
    {
      name: "time",
      title: "Event Date/Time",
      description: "These will show up exactly how you write them.",
      options: {columns: 3},
    },
  ],
  fields: [
    textField({name: "name", title: "Event Name", description: "The name of the event.", required: true}),
    textField({
      name: "location",
      title: "Event Location",
      description: "Where the event is happening.",
      required: true,
    }),
    {
      ...textField({name: "date", title: "Date", required: true}),
      fieldset: "time",
    },
    {
      ...textField({name: "startTime", title: "Start Time", required: true}),
      fieldset: "time",
    },
    {
      ...textField({name: "endTime", title: "End Time", required: false}),
      fieldset: "time",
    },
  ],
});
