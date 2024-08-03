import { Request } from "express";

export interface IReqUser extends Request {
  users: {
    roles: string[];
    id: string;
  };
}