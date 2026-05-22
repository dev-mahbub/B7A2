import { pool } from "../../db";
import type { IIssue } from "./issue.interface";

const createIssueService = async (payload: IIssue, token: string) => {
  const user = await pool.query(`SELECT * FROM users `);
  const result = await pool.query(`
        INSERT INTO issues(title, description, type, status, reporter_id) VALUES($1, $2, $3, COALESCE($4, status), $5)
        `);
};

export const issueService = {
  createIssueService,
};
