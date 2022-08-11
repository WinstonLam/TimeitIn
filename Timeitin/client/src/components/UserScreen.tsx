import React, { useEffect, useState } from 'react';
import { ReactComponent as SmileSVG } from "./images/smile.svg";
import { useAppDispatch } from "./hooks";
import { selectedUser, selectHoursYearly } from "./strore";
import { useSelector } from 'react-redux';
import { FetchYearlyHours, setStartingTime } from "../actions";
import UserScreenWidgets from "./UserScreenWidgets";

import "./Styles/UserScreen.css";

const UserScreen = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState(null);
  const fetchedUser: any = useSelector(selectedUser);
  const hoursYearly: any = useSelector(selectHoursYearly);
  const date = new Date();
  const dateOptions: any = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const timeOptions: any = { hour: '2-digit', minute: '2-digit' };

  useEffect(() => { setUser((fetchedUser)[0]); }, [fetchedUser]);
  useEffect(() => { dispatch(FetchYearlyHours("2022")); }, [dispatch]);
  useEffect(() => { dispatch(setStartingTime({ year: "2022", month: "01", day: "01", startTime: "13:00" })); }, [dispatch]);

  // Check if user has been fetched yet
  if (!user) return null;
  console.log(hoursYearly);


  return (
    <div className='userscreen-container'>
      <div className='info-card-container'>

        <div className='info-card-text'>
          <span className='info-card-title'>Welcome<span style={{ color: "#1976d2" }}> {user.firstname}</span></span>
          <p>You have been <span style={{ color: "#1976d2" }}>timed in </span>for today<br /> Here is your info for today's shift</p>

        </div>
        <SmileSVG className='info-card-img' />
      </div>
      <UserScreenWidgets {...{ time: date.toLocaleTimeString([], timeOptions), date: date.toLocaleDateString("nl-NL", dateOptions) }} />

    </div>
  );
}

export default UserScreen;