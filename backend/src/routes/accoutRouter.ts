import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import Account from "../models/AccountSchema";
import mongoose from "mongoose";

const accountRouter = Router();

accountRouter.get("/balance", authMiddleware, async (req: any, res: any) => {
  try {
    const account = await Account.findOne({ username: req.username });

    return res.status(200).json({
      balance: account!.balance,
    });
  } catch (error) {
    return res.status(411).json({
      msg: "Internal Server Error",
    });
  }
});

accountRouter.post("/transfer", authMiddleware, async (req: any, res: any) => {
  const { to, amount } = req.body;

  console.log("Req ", req.body)

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    const senderAccount = await Account.findOne({
      username: req.username,
    }).session(session);

    if (!senderAccount || senderAccount.balance < amount) {
      await session.abortTransaction();
      return res.status(200).json({
        msg: "Insufficient Balance",
      });
    }

    const recieverAccount = await Account.findOne({ username: to }).session(
      session
    );

    if (!recieverAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        msg: `${to} Account not found`,
      });
    }

    await Account.updateOne(
      { username: req.username },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { username: to },
      { $inc: { balance: +amount } }
    ).session(session);

    await session.commitTransaction();

    return res.status(200).json({
      msg: "Transfer Successful",
    });
  } catch (error) {
    console.log("Error", error)
    return res.status(411).json({
      msg: "Invalid Account",
    });
  }
});

export default accountRouter;
