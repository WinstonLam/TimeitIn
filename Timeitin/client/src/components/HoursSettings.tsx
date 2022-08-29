import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from 'react-redux';
import { selectHoursRequested } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchRequestedHours } from "../actions";


import OptionPicker from "./Inputs/OptionPicker";
import WeekPicker from "./Inputs/WeekPicker";
import DayPicker from "./Inputs/DayPicker";
import MonthPicker from "./Inputs/MonthsPicker";
import DailyHours from "./HoursSettings/DailyHours";


import "./Styles/HoursSettings.css";

const HoursSettings = () => {
    const dispatch = useAppDispatch();
    const date = new Date();

    const fetchedHours: any = useSelector(selectHoursRequested);
    const [hours, setHours] = useState(null);
    const [displaySelection, setDisplaySelection] = useState("Daily");

    const [selectedDate, setSelectedDate] = useState({
        day: date.getDate(),
        endDay: null,
        month: date.getMonth(),
        year: date.getFullYear(),
    });

    const destructuredDate = useMemo(() => {
        return new Date(selectedDate.year, selectedDate.month, selectedDate.day);
    }, [selectedDate]);

    useEffect(() => {
        // initial fetch of hours
        if (fetchedHours.length === 0) {
            dispatch(fetchRequestedHours(date));
        } // if weekly display, then provide end day
        else if (selectedDate.endDay) {
            dispatch(fetchRequestedHours(destructuredDate, selectedDate.endDay));
        } else if (!selectedDate.day) {
            dispatch(fetchRequestedHours(destructuredDate, null, true));
        } else { dispatch(fetchRequestedHours(destructuredDate)); }
    }, [dispatch, destructuredDate]);

    useEffect(() => {
        if (fetchedHours.length !== 0 && fetchedHours[0].hasOwnProperty("months")) {
            if (selectedDate.day) setHours((fetchedHours)[0].months[selectedDate.month + 1][selectedDate.day]);
            else setHours((fetchedHours)[0].months[selectedDate.month + 1]);
        } else setHours(null)
    }, [fetchedHours]);

    const handleSelection = (option: any) => {
        if (option) setDisplaySelection(option);
    }

    return (
        <div className="hours-container">
            <div className="hours-inner">
                <OptionPicker options={["Daily", "Weekly", "Monthly"]} onClick={(option) => handleSelection(option)} />
                {displaySelection === "Daily" && <DayPicker selectedDate={selectedDate} destructuredDate={destructuredDate} setSelectedDate={setSelectedDate} />}
                {displaySelection === "Weekly" && <WeekPicker selectedDate={selectedDate} destructuredDate={destructuredDate} setSelectedDate={setSelectedDate} />}
                {displaySelection === "Monthly" && <MonthPicker selectedDate={selectedDate} destructuredDate={destructuredDate} setSelectedDate={setSelectedDate} />}
                <DailyHours hours={hours} />
            </div>
        </div>
    )
}


export default HoursSettings;