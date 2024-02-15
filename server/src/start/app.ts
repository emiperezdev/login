import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRouter from '../routes/users.routes';
import error from '../middleware/error';

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const baseURL = '/api';
app.use(baseURL + '/user', usersRouter);

app.use(error);

export default app;