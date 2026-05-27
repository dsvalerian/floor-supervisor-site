import {defineType} from "sanity";
import imageField from "../fields/imageField";
import textField from "../fields/textField";

export default defineType({
  name: "imageInfo",
  type: "object",
  title: "Image",
  description: "An image and alt text.",
  fields: [
    imageField({
      options: {name: "image", title: "Image", required: true},
    }),
    textField({name: "alt", title: "Alt Text", required: true}),
  ],
});
