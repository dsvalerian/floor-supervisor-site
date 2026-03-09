import {post} from "./documents/post";
import {contactFormBlock} from "./types/blocks/contactFormBlock";
import {eventsBlock} from "./types/blocks/eventsBlock";
import {musicBlock} from "./types/blocks/musicBlock";
import photoBlock from "./types/blocks/photoBlock";
import {textBlock} from "./types/blocks/textBlock";
import {blockDetails} from "./types/blocks/blockColors";
import {customText} from "./types/customText";
import {eventDetails} from "./types/event";
import image from "./types/image";
import {musicTrack} from "./types/musicTrack";

export const schemaTypes = [
  // Types
  blockDetails,
  eventDetails,
  musicTrack,
  customText,
  image,
  // Blocks
  eventsBlock,
  musicBlock,
  textBlock,
  photoBlock,
  contactFormBlock,
  // Documents
  post,
];
