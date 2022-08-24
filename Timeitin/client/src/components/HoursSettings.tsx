import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from 'react-redux';
import { selectHoursDaily } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchDailyHours } from "../actions";

import getDate from './getDate';
import OptionPicker from "./Inputs/OptionPicker";
import DateRangePicker from "./Inputs/DateRangePicker";
import DailyHours from "./HoursSettings/DailyHours";



import "./Styles/HoursSettings.css";

const HoursSettings = () => {
    const dispatch = useAppDispatch();
    const [hours, setHours] = useState(null);
    const fetchedHours: any = useSelector(selectHoursDaily);
    const date = new Date();
    const today = getDate(date);


    useEffect(() => {
        if (fetchedHours.length === 0) {
            dispatch(fetchDailyHours(date));
        }
    }, [dispatch]);

    useEffect(() => {
        if (fetchedHours.length !== 0 && fetchedHours[0].hasOwnProperty("months")) {
            setHours((fetchedHours)[0].months[today.month][today.day]);
        }
    }, [fetchedHours]);

    const handleSelection = () => {
    }

    return (
        <div className="hours-container">
            <div className="hours-inner">
                <OptionPicker options={["Daily", "Weekly", "Monthly"]} onClick={handleSelection} />
                <DateRangePicker />
                <DailyHours hours={hours} />
            </div>
        </div>
    )
}


export default HoursSettings;