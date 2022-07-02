import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../actions";
import User from "./User/User";
import Form from "../Form/Form";

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
    <div>
      <h3>Users</h3>
      <User />
      <Form />
    </div>
  );
};

export default Users;
