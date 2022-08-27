import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import "../Styles/DateRangePicker.css";

interface DatePickerProps {
    destructuredDate: Date,
    selectedDate: any,
    setSelectedDate: ({ }: any) => void,
}
const WeekPicker = ({ destructuredDate, selectedDate, setSelectedDate }: DatePickerProps) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        const [adjustedStart, adjustedEnd] = getDates(new Date());
        setStartDate(adjustedStart);
        setEndDate(adjustedEnd);
    }, []);

    useEffect(() => {
        const [adjustedStart, adjustedEnd] = getDates(new Date())
        setSelectedDate({
            ...selectedDate,
            day: adjustedStart.getDate(),
            endDay: adjustedEnd.getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        })
    }, []);

    const onChange = (dates: any) => {
        const [adjustedStart, adjustedEnd] = getDates(dates[0]);
        setStartDate(adjustedStart);
        setEndDate(adjustedEnd);
        setSelectedDate({
            ...selectedDate,
            day: adjustedStart.getDate(),
            endDay: adjustedEnd.getDate(),
            month: dates[0].getMonth(),
            year: dates[0].getFullYear()
        })
    }


    const getDates = (date: Date) => {

        if (!date) return [];
        var day = date.getDay();
        var weekDay = (day - 7) * -1;
        var startDate = new Date(date);
        var endDate = new Date(date);


        if (day === 0) {
            startDate.setDate(startDate.getDate() - 6);
            endDate.setDate(endDate.getDate());
        } else {
            startDate.setDate(startDate.getDate() - day + 1);
            endDate.setDate(endDate.getDate() + weekDay)
        }


        return [startDate, endDate];
    }

    return (
        <DatePicker
            className="date-picker"
            calendarStartDay={1}
            selected={destructuredDate}
            startDate={startDate}
            endDate={endDate}
            onChange={(dates: any) => onChange(dates)}
            shouldCloseOnSelect={true}
            selectsRange
            disabledKeyboardNavigation
            calendarClassName="date-picker-calendar"
            placeholderText="Click to select a date"
        />
    );
}

export default WeekPicker;
