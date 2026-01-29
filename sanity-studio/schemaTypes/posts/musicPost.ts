import {defineArrayMember, defineField, defineType} from "sanity";
import {basePostFields} from "./basePost";

export const musicPost = defineType({
  name: "musicPost",
  type: "document",
  preview: {
    select: {
      title: "postTitle",
    },
  },
  fields: [
    ...basePostFields,
    defineField({
      name: "releaseCoverArt",
      type: "file",
      title: "Release Cover Art",
      description: "The cover art of the release. Should be square.",
    }),
    defineField({
      name: "releaseName",
      type: "string",
      title: "Release Name",
      description: "The name of the EP, album, single, etc.",
      validation: (rule) => rule.required().error("Must provide a title for the release."),
    }),
    defineField({
      name: "releaseArtist",
      type: "string",
      title: "Release Artist",
      description: "The artist(s) credited for the release.",
      validation: (rule) => rule.required().error("Must provide an arist for the release."),
    }),
    defineField({
      name: "releaseDescription",
      type: "text",
      title: "Release Description",
      description: "An optional few words to describe the release with whatever info you want.",
    }),
    defineField({
      name: "trackInfos",
      type: "array",
      title: "Tracks",
      of: [
        defineArrayMember({
          name: "trackInfo",
          type: "object",
          title: "Track",
          fields: [
            defineField({
              name: "trackFile",
              type: "file",
              title: "Audio File",
              validation: (rule) => rule.required().error("Must provide the track audio file."),
            }),
            defineField({
              name: "trackName",
              type: "string",
              title: "Name",
              validation: (rule) => rule.required().error("Must provide the track name."),
            }),
            defineField({
              name: "trackArtist",
              type: "string",
              title: "Artist",
              validation: (rule) => rule.required().error("Must provide the track artist."),
            }),
          ],
        }),
      ],
    }),
  ],
});
