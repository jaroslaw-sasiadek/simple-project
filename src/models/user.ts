import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
  },
  { timestamps: true },
);

export const User = models.User || mongoose.model("User", userSchema);
