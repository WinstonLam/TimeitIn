import React from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";

const DateSelector = ({
  formValues,
  errors,
  handleDateChange,
  minDate,
  maxDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Date of birth"
        inputFormat="dd/MM/yyyy"
        value={formValues.birthdate}
        minDate={new Date().setFullYear(new Date().getFullYear() + minDate)}
        maxDate={new Date().setFullYear(new Date().getFullYear() + maxDate)}
        onChange={(e) => {
          handleDateChange(e);
        }}
        renderInput={(params) => (
          <TextField
            style={{ width: "100%", margin: "20px" }}
            {...params}
            error={errors.birthdate}
            helperText={errors.birthdate}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateSelector;
