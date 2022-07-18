import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchUsers, deleteUser } from "../actions";
import Button from "././Button";
import { RenderColumns, RenderUsers } from "./UsersDataGrid";
import ConfirmationModal from "./ConfirmationModal";
import { DataGrid, GridSelectionModel, GridColDef } from "@mui/x-data-grid";
import "./Styles/Users.css";

const Users = () => {
  const dispatch = useAppDispatch();
  const users: any = useSelector(selectUsers);
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userRowId, setUserRowId] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const columns: GridColDef[] = RenderColumns(
    setShowConfirmationModal,
    setUserRowId
  );
  const rows = RenderUsers(fetchedUsers);

  useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);
  useEffect(() => { setFetchedUsers(users) }, [users]);


  const handleSelectionModelChange = (ids: GridSelectionModel) => {
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
      userRowId && dispatch(deleteUser(userRowId));
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

  const userColor = (user: any) => {
    return `rgba(${user.usericon.r}, ${user.usericon.g}, ${user.usericon.b}, ${user.usericon.a})`;
  };

  return (
    <>
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onConfirm={handleDelete}
        onCancel={setShowConfirmationModal}
      />
      <div className="container">
        <div className="wrapper">
          <div className="user-header">
            <div className="user-actions">
              <Button link="/users/new" text="Create User"></Button>
              {selectedUsers.length > 0 && (
                <Button
                  onClick={() => setShowConfirmationModal(true)}
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
            rows={users ? rows : []}
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
