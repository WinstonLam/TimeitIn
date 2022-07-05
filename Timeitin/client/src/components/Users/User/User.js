import React, { useState, useEffect } from "react";
import Button from "../../Button";
import { Checkbox } from "@mui/material";
import "../../Styles/User.css";

const User = ({ user, header = false }) => {
  const [show, setShow] = useState("");

  useEffect(() => {
    if (header) {
      setShow("hidden");
    }
  }, []);

  return (
    <div className="user-container">
      <div className="user-col-1">
        <Checkbox sx={{ visibility: show }} />
      </div>
      <div style={{ visibility: show }} className="user-col-2">
        <div
          style={{ backgroundColor: user.color }}
          className="user-icon-small"
        >
          {header ? (
            ""
          ) : (
            <h1>
              {user.firstname[0]}
              {user.lastname[0]}{" "}
            </h1>
          )}
        </div>
      </div>
      <div className="user-col-3">
        {user.firstname} {user.lastname}
      </div>
      <div className="user-col-4">{user.phonenumber}</div>
      <div className="user-col-5">{user.pincode}</div>
      <div className="user-col-6">
        {header ? "Color" : ""}
        <div
          style={{ display: header ? "none" : "", backgroundColor: user.color }}
          className="user-color"
        ></div>
      </div>
      <div style={{ visibility: show }} className="user-col-7">
        <Button text="Edit User"></Button>
        <Button text="Delete User" bgColor="red"></Button>
      </div>
    </div>
  );
};

export default User;
