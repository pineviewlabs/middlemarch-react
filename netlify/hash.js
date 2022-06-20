import { env } from "process";
import { createHmac, randomBytes } from "crypto";

export const hashOf = (password) =>
  createHmac("sha256", env.PASSWORD_SECRET).update(password).digest("hex");

export const uid = () => randomBytes(256).toString("hex");
