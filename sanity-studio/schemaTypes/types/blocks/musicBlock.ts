import {defineArrayMember, defineType} from "sanity";
import croppedImageField from "../../fields/imageField";
import textField from "../../fields/textField";
import {blockDetailsField} from "./blockColors";

export const musicBlock = defineType({
  name: "musicBlock",
  type: "object",
  title: "Music Block",
  description: "A music release that supports one or more music tracks.",
  fields: [
    blockDetailsField,
    textField({name: "artist", title: "Release Artist"}),
    textField({name: "name", title: "Release Name", description: "The name of this music release."}),
    croppedImageField({
      options: {name: "coverArt", title: "Cover Art", description: "The cover art for this release."},
      hotspotPreviews: [{title: "Square", aspectRatio: 1 / 1}],
    }),
    {
      name: "musicTracks",
      type: "array",
      title: "Music Tracks",
      description: "Upload all the tracks for this release.",
      of: [defineArrayMember({type: "musicTrack"})],
    },
  ],
  preview: {
    select: {
      artist: "artist",
      name: "name",
    },
    prepare({artist, name}: {artist?: string; name?: string}) {
      return {
        title: "Music Block",
        subtitle: `${artist && `${artist} - `}${name || ""}`,
      };
    },
  },
});
