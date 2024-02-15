import { Router } from 'express';
import { postUser } from '../controllers/users.controller';
import valid from '../middleware/valid';
import { validateUser } from '../schemas/user.schema';

const usersRouter = Router();

usersRouter.post('', valid(validateUser), postUser);

export default usersRouter;