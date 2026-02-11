import {defineType} from "sanity";
import fileField from "../fields/fileField";
import {textField} from "../fields/textField";

export const musicTrack = defineType({
  name: "musicTrack",
  type: "object",
  title: "Music Track",
  description: "Upload a track that can be played in the music player.",
  fields: [
    textField({name: "name", title: "Name", required: true}),
    textField({name: "artist", title: "Artist", required: true}),
    fileField({name: "audioFile", title: "Audio File", required: true}),
  ],
});
