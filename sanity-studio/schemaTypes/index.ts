import {customPost} from "./documents/customPost";
import {contactFormBlock} from "./types/blocks/contactFormBlock";
import {eventsBlock} from "./types/blocks/eventsBlock";
import {musicBlock} from "./types/blocks/musicBlock";
import photoBlock from "./types/blocks/photoBlock";
import {textBlock} from "./types/blocks/textBlock";
import {blockDetails} from "./types/common/blockDetails";
import {postDetails} from "./types/common/postDetails";
import {customText} from "./types/customText";
import {eventDetails} from "./types/event";
import image from "./types/image";
import {musicTrack} from "./types/musicTrack";

export const schemaTypes = [
  // Types
  blockDetails,
  postDetails,
  eventDetails,
  musicTrack,
  customText,
  image,
  eventsBlock,
  musicBlock,
  textBlock,
  photoBlock,
  contactFormBlock,
  // Documents
  customPost,
];
