import { Schema, model } from "mongoose";

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fields: {
      type: Array,
    },
    users: {
      type: Array,
      default: [],
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("List", listSchema);
