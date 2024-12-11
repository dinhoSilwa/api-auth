import { ObjectId } from "mongodb";
import mongoose, { Document, Schema } from "mongoose";

export interface IAuthUser extends Document {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
}

export const UserAuthSchema = new Schema<IAuthUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  }
);

export const AuthUser = mongoose.model<IAuthUser>(
  "User_Credentials",
  UserAuthSchema
);
