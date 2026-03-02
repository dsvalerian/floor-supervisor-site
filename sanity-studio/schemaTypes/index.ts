import {customPost} from "./documents/customPost";
import {textPost} from "./documents/textPost";
import {eventsBlock} from "./types/blocks/eventsBlock";
import {musicBlock} from "./types/blocks/musicBlock";
import {textBlock} from "./types/blocks/textBlock";
import {blockDetails} from "./types/common/blockDetails";
import {postDetails} from "./types/common/postDetails";
import {eventDetails} from "./types/event";
import {musicTrack} from "./types/musicTrack";
import {customText} from "./types/customText";
import photoBlock from "./types/blocks/photoBlock";
import image from "./types/image";
import {contactFormBlock} from "./types/blocks/contactFormBlock";

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
  textPost,
];
