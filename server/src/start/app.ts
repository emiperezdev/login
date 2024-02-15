import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRouter from '../routes/users.routes';
import error from '../middleware/error';
import authRouter from '../routes/auth.routes';
import cookieParser from 'cookie-parser';

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

const baseURL = '/api';
app.use(baseURL + '/user', usersRouter);
app.use(baseURL, authRouter);

app.use(error);

export default app;