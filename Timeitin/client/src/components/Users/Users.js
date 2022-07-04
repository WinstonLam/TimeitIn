import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../actions";
import User from "./User/User";
import Form from "../Form";
// import { Collapse } from "@mui/material";
import { Link } from "react-router-dom";
import "../Styles/Users.css";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchUsers());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const users = useSelector((state) => state.users);
  console.log(users);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="user-header">
          <div className="actions">
            <Link to="/users/new">
              <button className="create-user">Create User</button>
            </Link>
            <button className="delete-user">Delete User(s)</button>
          </div>
          <div className="selections"></div>
        </div>
        <div className="user-list">
          <User />
        </div>
      </div>
      {/* <Form /> */}
    </div>
  );
};

export default Users;
