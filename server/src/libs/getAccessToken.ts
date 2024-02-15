import jwt from "jsonwebtoken";
import { SECRET } from "../start/config";

const getAccessToken = (payload: any) => {
  return jwt.sign(payload, SECRET as string, { expiresIn: "1d" });
};

export default getAccessToken;
