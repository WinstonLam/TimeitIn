import CreateHours from "../models/userHours.js";

export const getHours = async (req, res) => {
  try {
    const hours = await CreateHours.find({});
    res.status(200).json(hours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getYearlyHours = async (req, res) => {
  const { year: year } = req.params;
  console.log("looking up " + year, req.params);
  try {
    const yearlyHours = await CreateHours.find();
    console.log(yearlyHours);

    res.status(200).json(yearlyHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMonthlyHours = async (req, res) => {
  const { year: year, month: month } = req.params;
  console.log("looking up " + year + " " + month);
  try {
    const monthlyHours = await CreateHours.find({ year: month });
    res.status(200).json(monthlyHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDailyHours = async (req, res) => {
  const { year: year, month: month, day: day } = req.params;
  console.log("looking up " + year + " " + month + " " + day);
  try {
    const dailyHours = await CreateHours.find({ year: { month: day } });
    res.status(200).json(dailyHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
