import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import "../Styles/DateRangePicker.css";

interface DatePickerProps {
    destructuredDate: Date,
    selectedDate: any,
    setSelectedDate: ({ }: any) => void,
}
const DayPicker = ({ destructuredDate, selectedDate, setSelectedDate }: DatePickerProps) => {

    useEffect(() => {
        setSelectedDate({
            ...selectedDate,
            day: new Date().getDate(),
            endDay: null,
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        })
    }, [])

    return (
        <DatePicker
            className="date-picker"
            selected={destructuredDate}
            onChange={(date) => setSelectedDate({ ...selectedDate, day: date.getDate(), month: date.getMonth(), year: date.getFullYear() })}
            disabledKeyboardNavigation
            calendarClassName="date-picker-calendar"
            placeholderText="Click to select a date"
        />
    );
}

export default DayPicker;
