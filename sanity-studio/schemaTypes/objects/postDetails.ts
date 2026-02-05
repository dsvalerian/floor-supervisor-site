import alignmentField from "../fields/alignmentField";
import backgroundField from "../fields/backgroundField";
import textField from "../fields/textField";
import textColorField from "../fields/textColorField";

const label = {
  name: "label",
  type: "object",
  title: "Label",
  description: "The label that appears in the top corner of the post.",
  fields: [textField(), alignmentField(true), textColorField(), backgroundField()],
};

const category = {
  name: "category",
  type: "string",
  title: "Category",
  description: "The category of the post. Used for filtering/sorting/etc.",
};

export default {
  name: "postDetails",
  type: "object",
  title: "Post Details",
  fields: [category, label],
  options: {
    collapsible: true,
  },
};
