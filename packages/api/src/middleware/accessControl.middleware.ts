import { NextFunction, Request, Response } from "express";

function AccessControlMiddleware(_req: Request, res: Response, next: NextFunction) {
  res
    .header("Access-Control-Allow-Origin", "*")
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
}

export default AccessControlMiddleware;