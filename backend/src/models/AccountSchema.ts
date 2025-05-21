import { model, Schema } from "mongoose";

const accountSchema = new Schema({
  username: {
    type: String,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = model("Account", accountSchema);
export default Account;
