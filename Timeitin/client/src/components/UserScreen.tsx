import React, { useEffect, useState } from 'react';
import { ReactComponent as SmileSVG } from "./images/smile.svg";
import { useAppDispatch } from "./hooks";
import { selectedUser, selectHoursDaily } from "./strore";
import { useSelector } from 'react-redux';
import { fetchDailyHours, setTime } from "../actions";
import UserScreenWidgets from "./UserScreenWidgets";
import Button from './Button';
import getDate from './getDate';

import "./Styles/UserScreen.css";

const UserScreen = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState(null);
  const [hours, setHours] = useState(null);
  const fetchedUser: any = useSelector(selectedUser);
  const fetchedHours: any = useSelector(selectHoursDaily);
  const date = new Date();
  const today = getDate(date);

  useEffect(() => { setUser((fetchedUser)[0]); }, [fetchedUser]);
  useEffect(() => { dispatch(fetchDailyHours(date)); }, [dispatch]);
  useEffect(() => {
    // this useEffect is to destructure the fetchedHours object and store them in hours
    if (fetchedHours.length > 0) {
      // if for the current day there are no hours registered yet, then set hours without month value
      if (fetchedHours[0]["months"] === undefined) {
        setHours(fetchedHours[0]);
      } else {
        setHours((fetchedHours)[0].months[today.month][today.day]);
      }
    }
  }, [fetchedHours]);
  useEffect(() => {
    // Set the time only if user has been fetched and no starting time has been set
    if (user && (hours && !hours[user.firstname])) {
      dispatch(setTime(date, user.firstname));
      if (!hours.hasOwnProperty("months")) {
        dispatch(fetchDailyHours(date));
      }
    };
  }, [dispatch, user, hours]);

  // Time out button handler
  const handleTimeOut = () => {
    const time = hours[user.firstname].time.split(",");
    const endTime = getDate(date).time;
    const newTime = [hours[user.firstname].time, endTime];

    // If user is timed out already, then do nothing
    if (time.length < 2) {
      dispatch(setTime(date, user.firstname, newTime));
      dispatch(fetchDailyHours(date))
    }
  }

  // Check if user has been fetched yet
  if (!user || !hours || (hours && !hours[user.firstname])) return null;

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
        time: hours[user.firstname].time,
        date: `${today.day}-${today.month}-${today.year}`
      }} />
      <div className='user-logout'>
        <Button textColor='white' bgColor="red" text="Time me Out" onClick={handleTimeOut} />
      </div>

    </div>
  );
}


export default UserScreen;