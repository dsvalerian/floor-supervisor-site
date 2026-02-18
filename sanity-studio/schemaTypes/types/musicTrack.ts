import {defineType} from "sanity";
import textField from "../fields/textField";
import audioField from "../fields/audioField";

export const musicTrack = defineType({
  name: "musicTrack",
  type: "object",
  title: "Music Track",
  description: "Upload a track that can be played in the music player.",
  fields: [
    textField({name: "name", title: "Name", required: true}),
    textField({name: "artist", title: "Artist", required: true}),
    audioField({name: "audioFile", title: "Audio File", required: true}),
  ],
});
