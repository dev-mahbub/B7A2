import { pool } from "../../db";

const createUserService = async (payload: any) => {
  const result = await pool.query(`
        INSERT INTO users()
        `);
};

export const userService = {
  createUserService,
};
