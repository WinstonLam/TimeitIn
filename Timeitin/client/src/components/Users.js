import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../actions";
import Button from "./Button";
import { RenderColumns, RenderUsers } from "./UsersDataGrid";
import ConfirmationModal from "./ConfirmationModal";
import { DataGrid } from "@mui/x-data-grid";
import "./Styles/Users.css";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userDeletionId, setUserDeletionId] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const columns = RenderColumns(setShowConfirmationModal, setUserDeletionId);
  const rows = RenderUsers(users);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) dispatch(fetchUsers());
    return () => (isMounted = false);
  }, [dispatch]);

  const handleSelectionModelChange = (ids) => {
    if (ids.length > 0) {
      const selectedIDs = new Set(ids);
      const selectedRowData = rows.filter((row) =>
        selectedIDs.has(row.id.toString())
      );
      setSelectedUsers(selectedRowData);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleDelete = async () => {
    selectedUsers.map((user) => {
      dispatch(deleteUser(user.id));
    });
    {
      userDeletionId && dispatch(deleteUser(userDeletionId));
    }
  };

  const userIconSelection = () => {
    let SelectionForIcons = selectedUsers;
    if (selectedUsers.length > 3) {
      SelectionForIcons = selectedUsers.slice(0, 3);
    }
    return SelectionForIcons.map((user) => {
      return (
        <div
          key={user.id}
          className="user-icon-small"
          style={{ backgroundColor: userColor(user) }}
        >
          <h3>{user.firstname[0]}</h3>
          <h3>{user.lastname[0]}</h3>
        </div>
      );
    });
  };

  const userColor = (user) => {
    return `rgba(${user.usericon.r}, ${user.usericon.g}, ${user.usericon.b}, ${user.usericon.a})`;
  };

  return (
    <>
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onConfirm={handleDelete}
        onCancel="/users"
      />
      <div className="container">
        <div className="wrapper">
          <div className="user-header">
            <div className="user-actions">
              <Button link="/users/new" text="Create User"></Button>
              {selectedUsers.length > 0 && (
                <Button
                  onClick={handleDelete}
                  text="Delete User(s)"
                  bgColor="red"
                ></Button>
              )}
            </div>
            <div className="selections">
              {selectedUsers.length > 0 && (
                <>
                  Selected users:
                  <div
                    className="user-icons"
                    style={{ display: "flex", height: "100%" }}
                  >
                    {userIconSelection()}
                    {selectedUsers.length > 3 && (
                      <div style={{ margin: "3% 0 0 2%" }}>
                        + {selectedUsers.length - 3}
                      </div>
                    )}
                  </div>
                </>
              )}
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
    </>
  );
};

export default Users;
