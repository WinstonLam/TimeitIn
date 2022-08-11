import express from "express";
import {
  getHours,
  getYearlyHours,
  getMonthlyHours,
  getDailyHours,
} from "../controllers/hours.js";

const router = express.Router();

router.get("/", getHours);
router.get("/:year", getYearlyHours);
router.get("/:year:month", getMonthlyHours);
router.get("/:year:month:day", getDailyHours);

export default router;
