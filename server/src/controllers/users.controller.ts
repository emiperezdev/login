import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserData } from "../schemas/user.schema";
import getAccessToken from "../libs/getAccessToken";

const db = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {};

export const postUser = async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body as User;

  const foundUser = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (foundUser) return res.status(404).json("Email is already in use");

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: encryptedPassword,
      age: age,
      createdAt: new Date(),
    },
  });

  const userData: UserData = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    age: newUser.age,
  };

  const token = getAccessToken(userData);

  res.cookie("token", token);
  res.status(201).json(userData);
};

export const updateUser = async (req: Request, res: Response) => {};

export const deleteUser = async (req: Request, res: Response) => {};
