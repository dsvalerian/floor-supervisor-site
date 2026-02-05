import eventsBlock from "../blocks/eventsBlock";
import musicBlock from "../blocks/musicBlock";
import textBlock from "../blocks/textBlock";
import postDetails from "../objects/postDetails";

export const customPost = {
  name: "customPost",
  type: "document",
  title: "Custom Post",
  fields: [
    postDetails,
    {
      name: "blocks",
      type: "array",
      title: "Content Blocks",
      of: [textBlock, eventsBlock, musicBlock],
    },
  ],
};
