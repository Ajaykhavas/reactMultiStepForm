import React from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";

const CustomDatePicker = ({ label, value, onChange, error, helperText }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!error}
            helperText={error ? helperText : null}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
