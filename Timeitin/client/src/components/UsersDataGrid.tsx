import React from "react";
import Button from "./Button";
import { UserDataGridProps } from "./interfaces";
import "./Styles/Users.css";

const userColor = ({ usericon }: UserDataGridProps) => {
  return `rgba(${usericon.r}, ${usericon.g}, ${usericon.b}, ${usericon.a})`;
};

const userIcon = ({ params }: UserDataGridProps) => {
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

const userButtons = ({
  params,
  setUserRowId,
  setShowConfirmationModal,
}: UserDataGridProps) => {
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
      field: "usericon",
      headerName: "",
      width: 80,
      renderCell: ({ params }: UserDataGridProps) => {
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
      renderCell: ({ params }: UserDataGridProps) => {
        return userButtons(params);
      },
    },
  ];
};

export const RenderUsers = ({ users }: UserDataGridProps) => {
  console.log(users);
  if (users) {
    return users.map((user: any) => {
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
