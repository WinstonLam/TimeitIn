import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../actions";
import User from "./User/User";
import Button from "../Button";
import { Grid } from "@mui/material";
import { GridItem } from "../Styles/Users";
import { Link } from "react-router-dom";
import "../Styles/Users.css";

const Users = () => {
  const users = useSelector((state) => state.users);
  const labels = {
    firstname: "Name",
    pincode: "Pincode",
    phonenumber: "Phonenumber",
  };
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

  const renderUsers = () => {
    console.log(users);
    if (users.length > 0) {
      return (
        <>
          <GridItem item>
            <User header={true} user={labels}></User>
          </GridItem>
          {users.map((user) => (
            <>
              <hr class="solid"></hr>
              <GridItem key={user.id} item>
                <User user={user}></User>
              </GridItem>
            </>
          ))}
        </>
      );
    }
    return (
      <GridItem item>
        <User header={true} user={labels}></User>
      </GridItem>
    );
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="user-header">
          <div className="user-actions">
            <Link to="/users/new">
              <Button text="Create User"></Button>
            </Link>
            <Button text="Delete User(s)" bgColor="red"></Button>
          </div>
          <div className="selections"></div>
        </div>
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          {renderUsers()}
        </Grid>
      </div>
    </div>
  );
};

export default Users;
