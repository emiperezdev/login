import { Router } from 'express';
import { handleLogin, handleLogout, handleVerify } from '../controllers/auth.controller';
import valid from '../middleware/valid';
import { validateLogin } from '../schemas/login.schema';
import auth from '../middleware/auth';

const authRouter = Router();

authRouter.post('/login', valid(validateLogin), handleLogin);

authRouter.post('/logout', auth, handleLogout);

authRouter.get('/verify', auth, handleVerify)

export default authRouter;