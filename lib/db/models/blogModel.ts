import { Schema, model, models } from 'mongoose';

const commentSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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

const blogSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'in-review',
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Blog = models.Blog || model('Blog', blogSchema);

export default Blog;
