import express from "express";
import {
  getHours,
  getYearlyHours,
  getMonthlyHours,
  getDailyHours,
  setStartingTime,
} from "../controllers/hours.js";

const router = express.Router();

router.get("/", getHours);
router.get("/:year", getYearlyHours);
router.get("/:year:month", getMonthlyHours);
router.get("/:year:month:day", getDailyHours);
router.post("/:year:month:day:startTime", setStartingTime);
export default router;
