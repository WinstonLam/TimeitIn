const normalWeek = (start: any, end: any) => {
  return Array(end - start + 1)
    .fill(null)
    .map((_, idx) => start + idx);
};

const endofMonthWeek = (start: any, end: any, year: any, month: any) => {
  const days = getDaysInMonth(year, month);
  var startDate = start;
  var newStart = 1;

  return Array(7)
    .fill(null)
    .map((_, idx) => {
      if (startDate > days) {
        return newStart++;
      }
      startDate += 1;
      return start + idx;
    });
};

const getDaysInMonth = (year: any, month: any) => {
  return new Date(year, month - 1, 0).getDate();
};

const range = (start: any, end: any, month: any, year: any) => {
  if (start > end) {
    return endofMonthWeek(start, end, year, month);
  } else {
    return normalWeek(start, end);
  }
};

export default range;
