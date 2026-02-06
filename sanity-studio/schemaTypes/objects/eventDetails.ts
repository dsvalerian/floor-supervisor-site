import textField from "../fields/textField";
import timeValueField from "../fields/timeSelectField";

export default {
  name: "event",
  type: "object",
  title: "Event",
  fields: [
    textField({name: "name", title: "Event Name", description: "The name of the event.", required: true}),
    textField({name: "date", title: "Event Date", description: "When the event takes place.", required: true}),
    textField({
      name: "location",
      title: "Event Location",
      description: "Where the event is happening.",
      required: true,
    }),
    timeValueField({name: "startTime", title: "Start Time", required: true}),
    timeValueField({name: "endTime", title: "End Time", required: false}),
  ],
};
