import {defineArrayMember, defineType} from "sanity";
import imageField from "../../fields/imageField";
import {textField} from "../../fields/textField";
import {blockDetailsField} from "../common/blockDetails";

export const musicBlock = defineType({
  name: "musicBlock",
  type: "object",
  title: "Music Block",
  description: "A music release that supports one or more music tracks.",
  fields: [
    blockDetailsField,
    textField({name: "artist", title: "Release Artist"}),
    textField({name: "name", title: "Release Name", description: "The name of this music release."}),
    imageField({name: "coverArt", title: "Cover Art", description: "The cover art for this release."}),
    {
      name: "musicTracks",
      type: "array",
      title: "Music Tracks",
      description: "Upload all the tracks for this release.",
      of: [defineArrayMember({type: "musicTrack"})],
    },
  ],
});
