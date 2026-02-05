import timeValueField from "./fields/timeValueField";
import {customPost} from "./posts/customPost";
import {eventPost} from "./posts/eventPost";
import {musicPost} from "./posts/musicPost";

export const schemaTypes = [musicPost, eventPost, timeValueField, customPost];
