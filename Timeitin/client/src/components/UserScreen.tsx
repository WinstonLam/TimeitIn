import React, { useEffect, useState } from 'react';
import { ReactComponent as SmileSVG } from "./images/smile.svg";
import { selectedUser } from "./strore";
import { useSelector } from 'react-redux';
import UserScreenWidgets from "./UserScreenWidgets";

import "./Styles/UserScreen.css";

const UserScreen = () => {
  const [user, setUser] = useState(null);
  const fetchedUser: any = useSelector(selectedUser);
  useEffect(() => {
    setUser((fetchedUser)[0]);
  }, [fetchedUser]);

  // Check if user has been fetched yet
  if (!user) return null;



  return (
    <div className='userscreen-container'>
      <div className='info-card-container'>

        <div className='info-card-text'>
          <span className='info-card-title'>Welcome<span style={{ color: "#1976d2" }}> {user.firstname}</span></span>
          <p>You have been <span style={{ color: "#1976d2" }}>timed in </span>for today<br /> Here is your info for today's shift</p>

        </div>
        <SmileSVG className='info-card-img' />
      </div>
      <UserScreenWidgets options={{ time: new Date() }} />

    </div>
  );
}

export default UserScreen;