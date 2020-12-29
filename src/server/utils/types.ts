import { Request } from 'express';
import { TAuthors } from '../db/models';

export interface IPayload {
    userid?: number;
}

export interface ReqUser extends Request {
    user?: TAuthors & IPayload
}