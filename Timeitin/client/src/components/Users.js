import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../actions";
import Button from "./Button";
import { renderColumns, renderUsers } from "./UsersDataGrid";
import { DataGrid } from "@mui/x-data-grid";

const Users = () => {
  const users = useSelector((state) => state.users);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const dispatch = useDispatch();

  const columns = renderColumns();
  const rows = renderUsers(users);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchUsers());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const handleSelectionModelChange = (ids) => {
    const selectedIDs = new Set(ids);
    const selectedRowData = rows.filter((row) =>
      selectedIDs.has(row.id.toString())
    );

    setSelectedUsers(selectedRowData);
  };

  const handleDelete = (users) => {
    users.map((user) => dispatch(deleteUser(user.id)));
  };

  // dispatch(deleteUser(userId));

  return (
    <div className="container">
      <div className="wrapper">
        <div className="user-header">
          <div className="user-actions">
            <Button link="/users/new" text="Create User"></Button>
            {selectedUsers.length > 0 ? (
              <Button
                onClick={handleDelete(selectedUsers)}
                text="Delete User(s)"
                bgColor="red"
              ></Button>
            ) : null}
          </div>
          <div className="selections">
            {selectedUsers.length > 0 ? (
              <>
                <p>Selected users: {selectedUsers.length}</p>
                <div
                  className="user-icons"
                  style={{ display: "flex", height: "100%" }}
                >
                  {selectedUsers.map((user) => {
                    return (
                      <div
                        key={user.id}
                        className="user-icon-small"
                        style={{
                          backgroundColor: user.usericon,
                          width: "13%",
                          height: "40%",
                          margin: "0.5%",
                        }}
                      >
                        <h3>{user.firstname[0]}</h3>
                        <h3>{user.lastname[0]}</h3>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
        </div>
        <DataGrid
          columns={columns}
          rows={users.length > 0 ? rows : []}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(ids) => {
            handleSelectionModelChange(ids);
          }}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Users;
