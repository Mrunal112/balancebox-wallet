import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

const User = model("User", userSchema);
export default User;