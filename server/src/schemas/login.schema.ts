import { User } from "@prisma/client";
import Joi from "joi";

const validateLogin = (user: User) => {
  const schema = Joi.object({
    email: Joi.string().min(13).max(50).email().required(),
    password: Joi.string().min(4).max(50).required(),
  });

  return schema.validate(user);
}

export { validateLogin };