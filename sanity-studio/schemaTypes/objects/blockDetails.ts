import backgroundField from "../fields/backgroundField";
import textColorField from "../fields/textColorField";

export default {
  name: "blockDetails",
  type: "object",
  title: "Block Details",
  description: "Change the look of this block only.",
  fields: [textColorField({required: false}), backgroundField({required: false})],
  options: {
    collapsible: true,
    collapsed: true,
  },
};
