import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { config } from './config/app';
import connectDatabase from './database/database';
import { errorHandler } from './middlewares/errorHandler';
import passport from './middlewares/passport';
import { HTTPSTATUS } from './config/http';
import { asyncHandler } from './middlewares/asyncHandler';
import authRoutes from './modules/auth/routes';
import { authenticateJWT } from './logic/jwt';
import mfaRoutes from './modules/mfa/routes';
import sessionRoutes from './modules/session/routes';

const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.APP_ORIGIN,
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(passport.initialize());

app.get(
  '/',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(HTTPSTATUS.OK).json({
      message: 'Hello Doston!!!',
    });
  }),
);

app.use(`${BASE_PATH}/auth`, authRoutes);

app.use(`${BASE_PATH}/mfa`, mfaRoutes);

app.use(`${BASE_PATH}/session`, authenticateJWT, sessionRoutes);

app.use(errorHandler);

app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
  await connectDatabase();
});