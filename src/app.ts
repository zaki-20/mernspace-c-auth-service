/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response, NextFunction } from "express";
import logger from "./config/logger";
import createHttpError, { HttpError } from "http-errors";
import { calculateDiscount } from "./utils";

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("Welcome to the discount calculator");
  // try{
  // const err = createHttpError(401, "Unauthorized");
  // next(err);
  // }catch(err){
  //     logger.error(err.message)
  //     const err = createHttpError(401, "Unauthorized")
  //     throw err
  // }
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: [
      {
        type: err.name,
        message: err.message,
        path: "",
        location: "",
      },
    ],
  });
});
export default app;
