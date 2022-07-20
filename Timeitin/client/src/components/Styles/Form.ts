import { Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormWrapper = styled(Collapse)({
  width: "75%",
  maxHeight: "600px !important",
  minWidth: " 650px",
  maxWidth: "1000px",
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
