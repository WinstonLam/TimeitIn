import CreateHours from "../models/userHours.js";

export const getHours = async (req, res) => {
  try {
    const hours = await CreateHours.find({});
    res.status(200).json(hours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// helper function for the get weekly hours, this helper returns
// the weekly hours that is not split between two months
const getNormalWeeklyHours = async (month, daysArray, fetchedMonthlyHours) => {
  const monthlyHours = fetchedMonthlyHours[0].months[month];
  if (!monthlyHours) return;

  var weeklyHours = Object.fromEntries(
    daysArray.map((day) => {
      return [day, monthlyHours[day]];
    })
  );
  return weeklyHours;
};

const getSplitWeeklyHours = async (
  month,
  nextMonth,
  daysArray,
  fetchedMonthlyHours,
  fetchedNextMonthlyHours
) => {
  const daysArray1 = daysArray.slice(0, daysArray.indexOf("1"));
  const daysArray2 = daysArray.slice(daysArray.indexOf("1") + 1);
  const firstMonth = getNormalWeeklyHours(
    month,
    daysArray1,
    fetchedMonthlyHours
  );
  const secondMonth = getNormalWeeklyHours(
    nextMonth,
    daysArray2,
    fetchedNextMonthlyHours
  );

  return Promise.all([firstMonth, secondMonth]).then((values) => {
    return { ...values[0], ...values[1] };
  });
};

export const getWeeklyHours = async (req, res) => {
  const {
    year: year,
    month: month,
    nextMonth: nextMonth,
    days: days,
  } = req.params;

  const daysArray = days.split(",");
  const field = `months.${month}`;
  const field2 = `months.${nextMonth}`;
  var hours = [];

  try {
    var fetchedNextMonthlyHours = null;
    const fetchedMonthlyHours = await CreateHours.find(
      { year: [year] },
      { [field]: true }
    );

    if (nextMonth !== "null") {
      fetchedNextMonthlyHours = await CreateHours.find(
        { year: [year] },
        { [field2]: true }
      );
      hours = getSplitWeeklyHours(
        month,
        nextMonth,
        daysArray,
        fetchedMonthlyHours,
        fetchedNextMonthlyHours
      );
    } else {
      hours = getNormalWeeklyHours(month, daysArray, fetchedMonthlyHours);
    }

    Promise.resolve(hours).then((val) => {
      fetchedMonthlyHours[0].months[month] = val;
    });

    res.status(200).json(fetchedMonthlyHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getYearlyHours = async (req, res) => {
  const { year: year } = req.params;
  console.log("looking up " + year, req.params);
  try {
    const yearlyHours = await CreateHours.find();
    res.status(200).json(yearlyHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMonthlyHours = async (req, res) => {
  const { year: year, month: month } = req.params;
  const field = `months.${month}`;
  console.log("looking up " + year + " " + month);
  try {
    const monthlyHours = await CreateHours.find(
      { year: [year] },
      { [field]: 1 }
    );
    res.status(200).json(monthlyHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDailyHours = async (req, res) => {
  const { year: year, month: month, day: day } = req.params;
  const field = `months.${month}.${day}`;
  console.log(`fetchin hours of ${day}-${month}-${year}`);
  try {
    const dailyHours = await CreateHours.find({ year: [year] }, { [field]: 1 });
    res.status(200).json(dailyHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const setStartingTime = async (req, res) => {
  const {
    year: year,
    month: month,
    day: day,
    time: time,
    name: name,
  } = req.params;

  console.table([name, time, `${day}-${month}-${year}`]);

  try {
    const field = `months.${month}.${day}.${name}`;
    const updatedHours = await CreateHours.updateOne(
      { year: year },
      { $set: { [field]: { time } } }
    );
    res.status(200).json(updatedHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const setEndingtime = async (req, res) => {
  const {
    year: year,
    month: month,
    day: day,
    time: time,
    name: name,
  } = req.params;

  console.table([name, time, `${day}-${month}-${year}`]);

  try {
    const field = `months.${month}.${day}.${name}`;
    const updatedHours = await CreateHours.updateOne(
      { year: year },
      { $set: { [field]: { time } } }
    );
    res.status(200).json(updatedHours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
