import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  connecting_string: process.env.CONNECTINGSTRING,
  port: process.env.PORT,
  secret: process.env.JWT_SECRET,
  refresh_secret: process.env.REFRESH_SECRET,
  access_token_expire: process.env.ACCESS_TOKEN_EXPIRE,
  refresh_token_expire: process.env.REFRESH_TOKEN_EXPIRE,
};

export default config;
