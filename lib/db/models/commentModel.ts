import { Schema, model, models } from 'mongoose';
import User from './userModel'

const commentSchema = new Schema(
  {
    author: {
      type: User,
      required: true,
    },
    content: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = models.Comment || model('Comment', commentSchema);

export default Comment;
