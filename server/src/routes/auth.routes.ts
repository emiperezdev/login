import { Router } from 'express';
import { handleLogin } from '../controllers/auth.controller';
import valid from '../middleware/valid';
import { validateLogin } from '../schemas/login.schema';

const authRouter = Router();

authRouter.post('/login', valid(validateLogin), handleLogin);

export default authRouter;