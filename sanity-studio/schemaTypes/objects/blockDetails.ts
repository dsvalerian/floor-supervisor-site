import backgroundField from "../fields/backgroundField";
import textColorField from "../fields/textColorField";

export default {
  name: "blockDetails",
  type: "object",
  title: "Block Details",
  fields: [textColorField(), backgroundField()],
  options: {
    collapsible: true,
  },
};
