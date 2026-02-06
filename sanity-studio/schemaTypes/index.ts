import timeValueField from "./fields/timeSelectField";
import {customPost} from "./documents/customPost";
import {eventPost} from "./documents/eventPost";
import {musicPost} from "./documents/musicPost";
import {textPost} from "./documents/textPost";
import {blockDetails} from "./types/common/blockDetails";
import {postDetails} from "./types/common/postDetails";
import {eventDetails} from "./types/event";
import {musicTrack} from "./types/musicTrack";
import {musicBlock} from "./types/blocks/musicBlock";
import {textBlock} from "./types/blocks/textBlock";
import {eventsBlock} from "./types/blocks/eventsBlock";

export const schemaTypes = [
  // todo get rid of these
  musicPost,
  eventPost,
  timeValueField(),
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
