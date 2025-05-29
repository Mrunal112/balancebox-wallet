import { Router } from "express";
import userRouter from "./userRouter";
import accountRouter from "./accoutRouter";
import { verifyToken } from "../utils/jwt";

const router = Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

router.get("/authenticate-route", (req: any, res: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ valid: false, error: "Invalid authorization header" });
  }

  const token = authHeader.split(" ")[1];
  const validToken = verifyToken(token);

  const valid = validToken ? true : false;

  return res.status(200).json({
    valid,
  });
});

export default router;
