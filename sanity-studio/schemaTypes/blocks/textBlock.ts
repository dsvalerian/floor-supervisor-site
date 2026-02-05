import alignmentField from "../fields/alignmentField";
import multilineTextField from "../fields/multilineTextField";
import sizeField from "../fields/sizeField";
import blockDetails from "../objects/blockDetails";

export default {
  name: "textBlock",
  type: "object",
  title: "Text Block",
  description: "A customizable block of text. Good for titles, paragraphs, etc.",
  fields: [blockDetails, multilineTextField(), sizeField(), alignmentField(true)],
};
