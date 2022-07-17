import React from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { DatePickerProps } from "./interfaces";

const DateSelector = ({
  birthdate,
  errors,
  handleDateChange,
  minDate,
  maxDate,
}: DatePickerProps) => {

  const adjustedMinDate = new Date(new Date().setFullYear(new Date().getFullYear() + minDate))
  const adjustedMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + maxDate))
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Date of birth"
        inputFormat="dd/MM/yyyy"
        value={birthdate}
        minDate={adjustedMinDate}
        maxDate={adjustedMaxDate}
        onChange={(date: Date | null) => handleDateChange(date)}
        renderInput={(params) => (
          <TextField
            value={birthdate}
            style={{ width: "100%", margin: "20px" }}
            {...params}
            error={errors.birthdateError ? true : false}
            helperText={errors.birthdateError}

          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateSelector;
