import React from "react";
import Button from "./Button";
import { UserDataGridProps, UserCreationFormProps } from "./interfaces";
import "./Styles/Users.css";

const userColor = (color: UserCreationFormProps['color']) => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
};

const userIcon = (params: any) => {
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

const userButtons = (
  params: any,
  setShowConfirmationModal: UserDataGridProps["setShowConfirmationModal"],
  setUserRowId: UserDataGridProps["setUserRowId"]) => {
  return (
    <>
      <Button
        height="80%"
        text="Edit User"
        onClick={(e) => setUserRowId(params.row.id)}
        link={`/users/edit/${params.row.id}`}
      ></Button>
      <Button
        height="80%"
        text="Delete User"
        bgColor="red"
        onClick={() => {
          setUserRowId(params.row.id);
          setShowConfirmationModal(true);
        }}
      ></Button>
    </>
  );
};

export const RenderColumns = (
  setShowConfirmationModal: UserDataGridProps["setShowConfirmationModal"],
  setUserRowId: UserDataGridProps["setUserRowId"]
) => {
  return [
    { field: "id", headerName: "", width: 100, hide: true },
    {
      field: "color",
      headerName: "",
      width: 80,
      renderCell: (params: any) => {
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
      renderCell: (params: any) => {
        return userButtons(params, setShowConfirmationModal, setUserRowId);
      },
    },
  ];
};

export const RenderUsers = (users: UserCreationFormProps[]) => {

  if (users) {
    return users.map((user: UserCreationFormProps) => {
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
    return [];
  }
};
