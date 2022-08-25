import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import "../Styles/DateRangePicker.css";

const DayPicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <DatePicker
            className="date-picker"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            disabledKeyboardNavigation
            calendarClassName="date-picker-calendar"
            placeholderText="Click to select a date"
        />
    );
}

export default DayPicker;
