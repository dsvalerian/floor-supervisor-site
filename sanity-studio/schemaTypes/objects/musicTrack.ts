import fileField from "../fields/fileField";
import textField from "../fields/textField";

export default {
  name: "musicTrack",
  type: "object",
  title: "Music Track",
  description: "Upload a track that can be played in the music player.",
  fields: [
    textField("name", "Name", "The name of the song."),
    textField("artist", "Artist", "Who made the song."),
    fileField("audioFile", "Audio File", "Upload the audio file for this track."),
  ],
};
