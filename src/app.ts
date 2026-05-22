import express, { Request, Response } from "express";
import logger from "./middleware/logger";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./modules/user/user.route";

const app = express();

app.use(express.json());
app.use(logger);
app.use(cookieParser());
app.use(cors({ origin: "http://localhost: 3000" }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Express Server",
    Author: "Mahbub Hasan",
  });
});

app.use("/api/users", userRoute);

export default app;
