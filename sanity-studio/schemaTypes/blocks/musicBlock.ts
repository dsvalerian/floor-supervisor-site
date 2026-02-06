import fileField from "../fields/fileField";
import textField from "../fields/textField";
import musicTrack from "../objects/musicTrack";

export default {
  name: "musicBlock",
  type: "object",
  title: "Music Block",
  description: "A music release that supports one or more music tracks.",
  fields: [
    textField({name: "artist", title: "Release Artist"}),
    textField({name: "name", title: "Release Name", description: "The name of this music release."}),
    fileField({name: "coverArt", title: "Cover Art", description: "The cover art for this release."}),
    {
      name: "musicTracks",
      type: "array",
      title: "Music Tracks",
      description: "Upload all the tracks for this release.",
      of: [musicTrack],
    },
  ],
};
