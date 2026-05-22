import type { Request, Response } from "express";
import { issueService } from "./issue.service";

const createIssue = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  try {
    const result = await issueService.createIssueService(
      req.body,
      token as string,
    );
    console.log("result", result);
  } catch (error) {}
};

export const issueController = {
  createIssue,
};
