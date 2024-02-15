import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const valid = (handler: (body: any) => Joi.ValidationResult<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = handler(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
  };
};

export default valid;