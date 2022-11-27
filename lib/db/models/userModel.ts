import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
    photoURL: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model('User', userSchema);

export default User;
