import { Router } from 'express';
import { handleLogin, handleLogout, handleVerify } from '../controllers/auth.controller';
import valid from '../middleware/valid';
import { validateLogin } from '../schemas/login.schema';

const authRouter = Router();

authRouter.post('/login', valid(validateLogin), handleLogin);

authRouter.post('/logout', handleLogout);

authRouter.get('/verify', handleVerify)

export default authRouter;