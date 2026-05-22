import type { Request, Response } from "express";

const signUp = async (req: Request, res: Response) => {
  console.log(req);
};

export const authController = {
  signUp,
};
