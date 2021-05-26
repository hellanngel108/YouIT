import mongoose from "mongoose";
import { groupPostInfoSchema } from "./groupPostInfo.js";
import {
  interactionInfoSchema,
  defaultInteractionInfoValue,
} from "./interactionInfo.js";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    privacy: {
      type: String,
      enum: ["Group", "Public", "Private", "Friend"],
      required: true,
    },

    groupPostInfo: {
      type: groupPostInfoSchema,
      required: false,
    },

    interactionInfo: {
      type: interactionInfoSchema,
      required: true,
      default: defaultInteractionInfoValue,
    },

    comments: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

var Post = mongoose.model("Post", postSchema);

export default Post;
