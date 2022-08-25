import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import "../Styles/DateRangePicker.css";

const WeekPicker = () => {
    const [startDate, setStartDate] = useState(getDates(new Date())[0]);
    const [endDate, setEndDate] = useState(getDates(new Date())[1]);
    const onChange = (dates: any) => {
        console.log(dates)

        const [start, _] = dates;
        const [adjustedStart, adjustedEnd] = getDates(start);
        setStartDate(adjustedStart);
        setEndDate(adjustedEnd);
    };

    function getDates(date: Date) {
        if (!date) return [];
        var day = date.getDay();
        var weekDay = (day - 7) * -1;
        var startDate = new Date(date);
        var endDate = new Date(date);

        startDate.setDate(startDate.getDate() - day + 1);
        if (day === 0) { endDate.setDate(endDate.getDate() + weekDay - 1) }
        else { endDate.setDate(endDate.getDate() + weekDay) }

        return [startDate, endDate];
    }

    return (
        <DatePicker
            className="date-picker"
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={(event) => onChange(event)}
            shouldCloseOnSelect={true}
            selectsRange
            disabledKeyboardNavigation
            calendarClassName="date-picker-calendar"
            placeholderText="Click to select a date"
        />
    );
}

export default WeekPicker;
