import express from "express";
import {
  getHours,
  getYearlyHours,
  getMonthlyHours,
  getDailyHours,
  getWeeklyHours,
  setStartingTime,
  setEndingtime,
} from "../controllers/hours.js";

const router = express.Router();

router.get("/", getHours);
router.get("/:year", getYearlyHours);
router.get("/:year/:month", getMonthlyHours);
router.get("/:year/:month/:day", getDailyHours);
router.get("/:year/:month/:nextMonth/:days", getWeeklyHours);
router.post("/:year/:month/:day/:time/:name", setStartingTime);
router.post("/:year/:month/:day/:time/:name", setEndingtime);
export default router;
