import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserData } from "../schemas/user.schema";
import getAccessToken from "../libs/getAccessToken";
import CustomRequest from "../schemas/IRequest.schema";

const db = new PrismaClient();

export const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body as User;
  const foundUser = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!foundUser) return res.status(404).json("User not found");

  const validPassword = await bcrypt.compare(password, foundUser.password);
  if (!validPassword) return res.status(400).json("Wrong password");

  const userData: UserData = {
    id: foundUser.id,
    name: foundUser.name,
    email: foundUser.email,
    age: foundUser.age,
  };

  res.cookie("token", getAccessToken(userData));
  res.json(userData);
};

export const handleLogout = async (req: Request, res: Response) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  res.sendStatus(200);
};

export const handleVerify = (req: CustomRequest, res: Response) => {
  res.json(req.user);
}