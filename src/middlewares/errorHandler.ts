import { Request, Response, NextFunction } from "express";
// import { logger } from "../utils/logger";
import { StatusCode } from "../utils/const/status-code";
import { HttpException } from "../exceptions/httpException";
import BaseCustomError from "../exceptions/base-custom-error";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  // logger.error(`ErrorHandler() method error: ${err}`);
  // If the error is an instance of our own throw ERROR
  if (err instanceof HttpException) {
    err.handleException(res);
  } else if (err instanceof BaseCustomError) {
    return res.status(err.getStatusCode()).json(err.serializeErrorOutput());
  }
  return res
    .status(StatusCode.InternalServerError)
    .json({ errors: [{ message: err.message }] });
};

export { errorHandler };
