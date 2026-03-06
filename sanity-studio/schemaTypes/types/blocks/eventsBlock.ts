import {defineArrayMember, defineType} from "sanity";
import {blockDetailsField} from "../common/blockDetails";
import textField from "../../fields/textField";

export const eventsBlock = defineType({
  name: "eventsBlock",
  type: "object",
  title: "Events Block",
  description: "A list of one or more events.",
  fields: [
    blockDetailsField,
    textField({name: "title", title: "Title", required: false, description: "An optional title for the event block."}),
    {
      name: "events",
      type: "array",
      title: "Events",
      description: "Define one or more events.",
      of: [defineArrayMember({type: "event"})],
    },
  ],
  preview: {
    select: {
      title: "title",
      events: "events",
    },
    prepare({title, events}: {title?: string; events?: {_type: "event"}[]}) {
      const eventsCount = events?.length ?? 0;
      return {
        title: "Events Block",
        subtitle: `${eventsCount} event(s)${title ? ` - ${title}` : ""}`,
      };
    },
  },
});
