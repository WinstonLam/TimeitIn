import { Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormWrapper = styled(Collapse)({
  height: "80vh",
  width: "90%",
  minWidth: " 650px",
  borderRadius: " 2rem",
  boxShadow: "-7px 15px 21px 8px rgba(196,174,143,0.84)",
  webkitBoxShadow: "-7px 15px 21px 8px rgba(196,174,143,0.84)",
  mozBoxShadow: "-7px 15px 21px 8px rgba(196,174,143,0.84)",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: " 1fr 3fr",
  gridColumnGap: " 0px",
  gridRowGap: "0px",
});
