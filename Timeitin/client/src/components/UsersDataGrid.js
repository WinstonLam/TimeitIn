import React from "react";
import Button from "./Button";
import "./Styles/Users.css";

const userColor = (usericon) => {
  return `rgba(${usericon.r}, ${usericon.g}, ${usericon.b}, ${usericon.a})`;
};

const userIcon = (params) => {
  return (
    <div
      className="user-icon-small"
      style={{ backgroundColor: userColor(params.row.usericon), width: "80%" }}
    >
      <h2>{params.row.firstname[0]}</h2>
      <h2>{params.row.lastname[0]}</h2>
    </div>
  );
};

const userButtons = (params) => {
  return (
    <>
      <Button height="80%" text="Edit User"></Button>
      <Button height="80%" text="Delete User" bgColor="red"></Button>
    </>
  );
};

export const renderColumns = (params) => {
  return [
    { field: "id", headerName: "", width: 100, hide: true },
    {
      field: "usericon",
      headerName: "",
      width: 80,
      renderCell: (params) => {
        return userIcon(params);
      },
    },
    { field: "firstname", headerName: "Firstname", width: 90, editable: true },
    { field: "lastname", headerName: "Lastname", width: 90, editable: true },
    {
      field: "phonenumber",
      headerName: "Phonenumber",
      width: 125,
      editable: true,
    },
    { field: "birthdate", headerName: "Birthdate", width: 100, editable: true },
    { field: "pincode", headerName: "Pincode", width: 75, editable: true },
    {
      field: "actions",
      headerName: "",
      width: 300,
      renderCell: (params) => {
        return userButtons(params);
      },
    },
  ];
};

export const renderUsers = (users) => {
  if (users.length > 0) {
    return users.map((user) => {
      return {
        id: user._id,
        usericon: user.color,
        firstname: user.firstname,
        lastname: user.lastname,
        phonenumber: user.phonenumber,
        birthdate: user.birthdate,
        pincode: user.pincode,
      };
    });
  } else {
    return {};
  }
};
