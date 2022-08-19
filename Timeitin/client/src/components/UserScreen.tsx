import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SmileSVG } from "./images/smile.svg";
import { ReactComponent as ByeSVG } from "./images/bye.svg";
import { useAppDispatch } from "./hooks";
import { selectedUser, selectHoursDaily } from "./strore";
import { useSelector } from 'react-redux';
import { fetchDailyHours, setTime } from "../actions";
import { RevolvingDot } from 'react-loader-spinner'
import UserScreenWidgets from "./UserScreenWidgets";
import Button from './Button';
import getDate from './getDate';

import "./Styles/UserScreen.css";

const UserScreen = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState(null);
  const [hours, setHours] = useState(null);
  const [timedOut, setTimedOut] = useState(false);
  const [counter, setCounter] = useState(30);
  const fetchedUser: any = useSelector(selectedUser);
  const fetchedHours: any = useSelector(selectHoursDaily);
  const date = new Date();
  const today = getDate(date);


  useEffect(() => { dispatch(fetchDailyHours(date)); }, [dispatch]);

  useEffect(() => {
    if (fetchedUser.length === 0) navigate("/user/404")
    setUser((fetchedUser)[0]);
  }, [fetchedUser]);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) navigate("/");
  }, [counter, timedOut]);

  useEffect(() => {
    if (user && hours.hasOwnProperty(user.firstname)) {
      const time = hours[user.firstname].time.split(",").length;
      if (time > 1) {
        setTimedOut(true);
      }
    }
  }, [hours]);

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
        <div className='info-card'>
          <div className='info-card-text'>
            {timedOut ?
              <>
                <span className='info-card-title'>Goodbye<span style={{ color: "#1976d2" }}> {user.firstname}</span></span>
                <p>You have been <span style={{ color: "#1976d2" }}>timed out </span>for today<br /> Thanks for working and see you next time</p>
              </>
              :
              <>
                <span className='info-card-title'>Welcome<span style={{ color: "#1976d2" }}> {user.firstname}</span></span>
                <p>You have been <span style={{ color: "#1976d2" }}>timed in </span>for today<br /> Here is your info for today's shift</p>
              </>
            }
          </div>
          <div className='info-card-icons'>
            <SmileSVG className='info-card-img' />
            <ByeSVG className={`info-card-img bye ${timedOut ? "" : "hidden"}`} />
          </div>
        </div>
      </div>
      <UserScreenWidgets {...{
        time: hours[user.firstname].time,
        date: `${today.day}-${today.month}-${today.year}`
      }} />
      <div className='logout-message'>
        <div className='redirect-text'>Redirecting to
          <a className='redirect-link' href="/"><u>home page</u></a>
          in: </div>
        <div className='redirect-counter'>
          <RevolvingDot color="#1976d2" />
          <div className='counter'>{counter}</div>
        </div>
      </div>


      <div className={`user-logout ${timedOut ? "hidden" : ""}`} >
        <Button textColor='white' bgColor="red" text="Time me Out" onClick={handleTimeOut} />
      </div>

    </div>
  );
}


export default UserScreen;