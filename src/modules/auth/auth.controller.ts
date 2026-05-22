import { Request, Response } from "express";
import sendResponse from "../../utility/sendResponse";
import { authService } from "./auth.service";

const registration = async (req: Request, res: Response) => {
  try {
    const result = await authService.registration(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "user created successfully",
      data: result.rows[0],
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "Something went wrong",
    });
  }
};

export const authController = {
  registration,
};
