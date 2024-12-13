import { NextFunction, Request, Response } from 'express';
import { HTTPSTATUS } from '../../config/http';

export type AsyncControllerType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<any>;

export type HttpStatusCode = (typeof HTTPSTATUS)[keyof typeof HTTPSTATUS];

import { UserDocument } from '../../database/models/user';

declare global {
  namespace Express {
    interface User extends UserDocument {}
    interface Request {
      sessionId?: string;
    }
  }
}
