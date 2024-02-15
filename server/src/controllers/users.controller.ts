import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

const db = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  
};

export const postUser = async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body as User;

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: encryptedPassword,
      age: age,
      createdAt: new Date()
    },
  });

  const userData = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    age: newUser.age,
    createdAt: newUser.createdAt
  }

  res.status(201).json(userData);
};

export const updateUser = async (req: Request, res: Response) => {};

export const deleteUser = async (req: Request, res: Response) => {};
