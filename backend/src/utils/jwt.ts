import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_PASSWORD;

if (!jwtSecret) {
  throw new Error("JWT SECRET Password is not defined.");
}

interface Payload {
  username: string;
}

export function generateToken(payload: Payload): string {
  return jwt.sign(payload, jwtSecret!);
}

export function verifyToken(token: string): Payload | null {
  try {
    const decoded = jwt.verify(token, jwtSecret!) as Payload;
    return decoded;
  } catch (error) {
    console.log("JWT Verification Failed: ", error);
    return null;
  }
}
