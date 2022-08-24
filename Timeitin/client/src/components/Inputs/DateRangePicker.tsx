import React from 'react';
import { Calendar, DateRange } from 'react-date-range';


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../Styles/DateRangePicker.css";

const DateRangePicker = () => {
    return (
        <div className="date-range-picker">
            <Calendar weekStartsOn={1} showMonthArrow={false} />
            <DateRange moveRangeOnFirstSelection={true} />
        </div>)
        ;
}

export default DateRangePicker;