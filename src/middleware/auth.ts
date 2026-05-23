import type { NextFunction, Request, Response } from "express";
import type { ROLES } from "../types";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";
import { pool } from "../db";
import sendResponse from "../utils/sendResponse";

const auth = (...roles: ROLES[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      return sendResponse(res, {
        statusCode: 401,
        success: false,
        message: "Unauthorized access!",
      });
    }

    const decoded = jwt.verify(
      token as string,
      config.secret as string,
    ) as JwtPayload;

    const { id } = decoded;

    const userData = await pool.query(
      `
        SELECT * FROM users WHERE id=$1
        `,
      [id],
    );

    if (userData.rows.length === 0) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "User not found",
      });
    }

    const user = userData.rows[0];

    if (roles.length && !roles.includes(user.role)) {
      return sendResponse(res, {
        statusCode: 401,
        success: false,
        message: "Forbidden access",
      });
    }

    req.user = decoded;
    next();
  };
};

export default auth;
