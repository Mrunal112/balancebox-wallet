import { verifyToken } from "../utils/jwt";

export function authMiddleware(req: any, res: any, next: any) {
  const headers = req.headers.authorization;

  if (!headers || !headers.startsWith("Bearer ")) {
    return res.status(411).json({
      msg: "Unauthorised User",
    });
  }

  try {
    const token = headers.split(" ")[1];
    const isVerified = verifyToken(token);

    if (!isVerified) {
      return res.status(411).json({
        msg: "Unauthorised User",
      });
    }

    if (isVerified.username) {
      req.username = isVerified.username;
      next();
    }
  } catch (error) {
    console.log("Auth Middleware Error ", error);
    return res.status(411).json({
      msg: "Internal Server Error",
    });
  }
}
