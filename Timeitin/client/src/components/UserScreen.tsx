import React, { useEffect, useState } from 'react';
import { ReactComponent as SmileSVG } from "./images/smile.svg";
import { useAppDispatch } from "./hooks";
import { selectedUser, selectHoursDaily } from "./strore";
import { useSelector } from 'react-redux';
import { fetchDailyHours, setStartingTime } from "../actions";
import UserScreenWidgets from "./UserScreenWidgets";

import "./Styles/UserScreen.css";

const UserScreen = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState(null);
  const [hours, setHours] = useState(null);
  const fetchedUser: any = useSelector(selectedUser);
  const fetchedHours: any = useSelector(selectHoursDaily);
  const date = new Date();

  // const dateOptions: any = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const timeOptions: any = { hour: '2-digit', minute: '2-digit' };

  const settingDate = {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString(),
    day: date.getDate().toString(),
    startTime: date.toLocaleTimeString([], timeOptions)
  }

  const filterHours = (hours: any, name: String) => {
    Object.keys(hours).filter(key => name.includes(key))
      .reduce((obj: any, key) => { obj[key] = hours[key]; return obj; }, {});
  }


  useEffect(() => { setUser((fetchedUser)[0]); }, [fetchedUser]);
  useEffect(() => {
    // this useEffect is to destructure the fetchedHours object and store them in hours
    const month = settingDate.month;
    const day = settingDate.day;
    if (fetchedHours.length > 0) {
      setHours((fetchedHours)[0].months[month][day]);
    }
  }, [fetchedHours]);
  useEffect(() => { dispatch(fetchDailyHours(settingDate.year, settingDate.month, settingDate.day)); }, [dispatch]);
  useEffect(() => {
    if (user) {
      dispatch(setStartingTime({
        year: settingDate.year,
        month: settingDate.month,
        day: settingDate.day,
        startTime: settingDate.startTime,
        name: user.firstname
      }))
    };
  }, [dispatch, user]);

  // Check if user has been fetched yet
  if (!user || !hours) return null;

  console.log(filterHours(hours, user.firstname));

  return (
    <div className='userscreen-container'>
      <div className='info-card-container'>

        <div className='info-card-text'>
          <span className='info-card-title'>Welcome<span style={{ color: "#1976d2" }}> {user.firstname}</span></span>
          <p>You have been <span style={{ color: "#1976d2" }}>timed in </span>for today<br /> Here is your info for today's shift</p>

        </div>
        <SmileSVG className='info-card-img' />
      </div>
      <UserScreenWidgets {...{
        time: settingDate.startTime,
        date: `${settingDate.day}-${settingDate.month}-${settingDate.year}`
      }} />

    </div>
  );
}

export default UserScreen;