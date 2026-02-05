import textField from "../fields/textField";

export default {
  name: "event",
  type: "object",
  title: "Event",
  fields: [
    textField("name", "Event Name", "The name of the event."),
    textField("date", "Event Date", "When the event takes place."),
    textField("location", "Event Location", "Where the event is happening."),
  ],
};
