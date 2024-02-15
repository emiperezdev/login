import { User } from "@prisma/client";
import Joi from "joi";

const validateUser = (user: User) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    email: Joi.string().min(13).max(50).email().required(),
    password: Joi.string().min(4).max(50).required(),
    age: Joi.number().integer().min(18).max(100).required()
  });

  return schema.validate(user);
}

export { validateUser };