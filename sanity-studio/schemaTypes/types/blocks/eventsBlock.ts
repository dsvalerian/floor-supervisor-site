import {defineArrayMember, defineType} from "sanity";
import {blockDetailsField} from "../common/blockDetails";

export const eventsBlock = defineType({
  name: "eventsBlock",
  type: "object",
  title: "Events Block",
  description: "A list of one or more events.",
  fields: [
    blockDetailsField,
    {
      name: "events",
      type: "array",
      title: "Events",
      description: "Define one or more events.",
      of: [defineArrayMember({type: "event"})],
    },
  ],
});
