import textField from "../fields/textField";
import timeValueField from "../fields/timeSelectField";

export default {
  name: "event",
  type: "object",
  title: "Event",
  fields: [
    textField("name", "Event Name", "The name of the event.", true),
    textField("date", "Event Date", "When the event takes place.", true),
    textField("location", "Event Location", "Where the event is happening.", true),
    timeValueField("startTime", "Start Time", true),
    timeValueField("endTime", "End Time", false),
  ],
};
