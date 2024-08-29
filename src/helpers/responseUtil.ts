import { Response } from "express";
import { StatusCode } from "./const/status-code";
export class ResponseUtil {
  static success<T>(
    res: Response,
    result: T,
    message = "OK",
    code: string = "",
    statusCode: StatusCode
  ): void {
    res.status(statusCode).json({
      code,
      message,
      results: {
        result,
      },
    });
  }

  static errors(
    res: Response,
    message: string = "Invalid request action",
    code: string = "",
    statusCode: StatusCode
  ): void {
    res.status(statusCode).json({
      code,
      message,
      results: {
        data: null,
      },
    });
  }
}
