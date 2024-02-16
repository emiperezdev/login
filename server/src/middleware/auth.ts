import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../start/config";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json("Access denied. Token no provided");

  try {
    const decoded = jwt.verify(token, SECRET as string);
    req.user = decoded;

    next();
  } catch (e) {
    res.status(400).json("Invalid token");
  }
};

export default auth;
