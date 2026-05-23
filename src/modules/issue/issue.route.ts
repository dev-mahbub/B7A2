import { Router } from "express";
import { issueController } from "./issue.controller";
import auth from "../../middleware/auth";
import { USER_ROLES } from "../../types";

const router = Router();

router.post("/", issueController.createIssue);
router.get("/", issueController.getAllIssues);
router.get("/:id", issueController.getSingleIssue);
router.patch("/:id", issueController.updateIssue);
router.delete("/:id", auth(USER_ROLES.maintainer), issueController.deleteIssue);

export const issueRoute = router;
