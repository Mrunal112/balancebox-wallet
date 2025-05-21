import { Router } from "express";
import { createUserSchema } from "../schemas/signup.schema";
import { generateToken } from "../utils/jwt";
import User from "../models/UserSchema";
import { signInSchema } from "../schemas/signin.schema";
import { authMiddleware } from "../middleware/auth";
import { updateProfileSchema } from "../schemas/update.profile";
import Account from "../models/AccountSchema";

const userRouter = Router();

userRouter.post("/login", async (req: any, res: any, next: any) => {
  const result = signInSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(411).json({
      msg: "Invaild Inputs",
    });
  }

  const { username, password } = result.data;
  try {
    const existingUser = await User.findOne({
      username,
    });

    if (!existingUser) {
      return res.status(411).json({
        msg: "User dosen't exists",
      });
    }

    if (existingUser.password !== password) {
      return res.status(411).json({
        msg: "Incorrect Password",
      });
    }

    const token = generateToken({ username });

    return res.status(200).json({
      token: token,
    });
  } catch (error) {
    return res.status(411).json({
      msg: "Internal Server Error",
    });
  }
});

userRouter.post("/signup", async (req: any, res: any, next: any) => {
  const data = req.body;
  const result = createUserSchema.safeParse(data);
  if (!result.success) {
    return res.status(411).json({
      msg: "Invalid Inputs",
    });
  }

  try {
    const existingUser = await User.findOne({
      $or: [
        { username: data.username },
        { email: data.email }
      ]
    });

    if (existingUser) {
      return res.status(411).json({
        msg: "Username/Email already taken.",
      });
    }

    const user = await User.create({
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    });

    const account = await Account.create({
      username: data.username,
      balance: 1000,
    });

    const token = generateToken({ username: data.username });
    return res.status(200).json({
      token: token,
    });
  } catch {
    return res.status(411).json({
      msg: "Internal Server Error",
    });
  }
});

userRouter.put(
  "/update-profile-info",
  authMiddleware,
  async (req: any, res: any) => {
    const data = req.body;
    console.log("Data is ", data);
    try {
      const profileSchema = updateProfileSchema.safeParse(data);

      if (!profileSchema.success) {
        return res.status(411).json({
          msg: "Invalid Inputs",
        });
      }

      await User.updateOne({ username: req.username }, data);

      const responseBody: { msg: string; token?: string } = {
        msg: "Information Updated Successfully",
      };

      if (data?.username) {
        const token = generateToken({ username: data.username });
        responseBody.token = token;
      }

      return res.status(200).json(responseBody);
    } catch (error) {
      return res.status(411).json({
        msg: "Internal Server Error",
      });
    }
  }
);

userRouter.get("/get-users", authMiddleware, async (req: any, res: any) => {
  const filterValue = req.query.filter;
  try {
    const users = await User.find({
      $or: [
        {
          firstName: {
            $regex: filterValue,
          },
        },
        {
          lastName: {
            $regex: filterValue,
          },
        },
      ],
    });

    return res.status(200).json({
      users: users.map((user) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
      })),
    });
  } catch (error) {
    return res.status(411).json({
      msg: "Internal Server Error",
    });
  }
});

export default userRouter;
