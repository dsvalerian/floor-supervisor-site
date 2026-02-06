import {customPost} from "./documents/customPost";
import {textPost} from "./documents/textPost";
import {eventsBlock} from "./types/blocks/eventsBlock";
import {musicBlock} from "./types/blocks/musicBlock";
import {textBlock} from "./types/blocks/textBlock";
import {blockDetails} from "./types/common/blockDetails";
import {postDetails} from "./types/common/postDetails";
import {eventDetails} from "./types/event";
import {musicTrack} from "./types/musicTrack";

export const schemaTypes = [
  // Types
  blockDetails,
  postDetails,
  eventDetails,
  musicTrack,
  eventsBlock,
  musicBlock,
  textBlock,
  // Documents
  customPost,
  textPost,
];
