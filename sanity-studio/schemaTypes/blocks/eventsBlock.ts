import blockDetails from "../objects/blockDetails";
import eventDetails from "../objects/eventDetails";

export default {
  name: "eventsBlock",
  type: "object",
  title: "Events Block",
  description: "A list of one or more events.",
  fields: [
    blockDetails,
    {
      name: "events",
      type: "array",
      title: "Events",
      description: "Define one or more events.",
      of: [eventDetails],
    },
  ],
};
