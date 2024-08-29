import { Response } from "express";
import { StatusCode } from "../utils/const/status-code";
import { ResponseUtil } from "../utils/responseUtil";

export class HttpException extends Error {
  public statusCode: StatusCode;
  public code: string;
  public result: any;

  constructor(
    message: string,
    statusCode: StatusCode,
    code: string = "",
    result: any = {}
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.result = result;

    Error.captureStackTrace(this, this.constructor);
  }

  // Handle the exception based on the status code
  handleException(res: Response): void {
    ResponseUtil.errors(res, this.message, this.code, this.statusCode);
  }

  // Serialize error for logging or debugging
  serializeError(): {
    statusCode: StatusCode;
    code: string;
    message: string;
    result: any;
  } {
    return {
      statusCode: this.statusCode,
      code: this.code,
      message: this.message,
      result: this.result,
    };
  }
}
