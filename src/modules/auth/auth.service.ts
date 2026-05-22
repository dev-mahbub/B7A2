import bcrypt from "bcryptjs";
import { pool } from "../../db";
import type { IUser } from "./auth.interface";
import jwt from "jsonwebtoken";
import config from "../../config";
import type { StringValue } from "ms";

const signUpUserService = async (payload: IUser) => {
  const { name, email, password, role } = payload;
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    `INSERT INTO users(name, email, password, role)
     VALUES($1, $2, $3, COALESCE($4, 'contributor')) RETURNING *`,
    [name, email, hashPassword, role],
  );
  delete result.rows[0].password;
  return result;
};

const loginUserService = async (payload: IUser) => {
  const { email, password } = payload;

  const userData = await pool.query(
    `
        SELECT * FROM users WHERE email=$1
        `,
    [email],
  );

  if (!userData.rows[0]) {
    throw new Error("Invalid Crediantial!");
  }

  const user = userData.rows[0];
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw new Error("Invalid Crediantial!");
  }
  delete userData.rows[0].password;
  const jsonPayload = {
    id: user.id,
    name: user.name,
    role: user.role,
  };

  const token = jwt.sign(jsonPayload, config.secret as string, {
    expiresIn: config.access_token_expire as StringValue,
  });
  return { token, user };
};

export const authService = {
  signUpUserService,
  loginUserService,
};
