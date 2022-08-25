import React, { useState } from "react";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import "../Styles/DateRangePicker.css";

const MonthPicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            className="date-picker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            disabledKeyboardNavigation
            calendarClassName="date-picker-calendar"
            placeholderText="Click to select a date"
        />
    );
};

export default MonthPicker;
