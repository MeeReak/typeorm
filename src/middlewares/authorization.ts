import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/httpException";
import { StatusCode } from "../helpers/const/status-code";

export default function authorization(allowedRoles: string[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    //@ts-ignore
    const userRoles = req.currentUser;

    // Check if userRoles is an array and if it contains at least one allowed role
    const hasAuthorization =
      Array.isArray(userRoles) &&
      userRoles.some((role) => allowedRoles.includes(role));

    if (!hasAuthorization) {
      return next(
        new HttpException(
          "You do not have permission to access this resource",
          StatusCode.Forbidden
        )
      );
    }

    next();
  };
}
