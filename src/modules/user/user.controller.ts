import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utility/sendResponse";

const createUser = async (req: Request, res: Response) => {
  const result = userService.createUserService(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "user created successfully",
    // data: result.rows[0],
  });
};

export const userController = {
  createUser,
};
