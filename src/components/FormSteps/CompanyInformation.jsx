import React from "react";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Box,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { STEP_FORM_LABELS, STEP_FORM_ERRORS } from "../../constants/Constants";

const userOptions = [
  { label: "1-10", value: 1 },
  { label: "10-20", value: 2 },
  { label: "20-30", value: 3 },
  { label: "40+", value: 4 },
];

const companyFields = [
  "Tech",
  "Finance",
  "Healthcare",
  "Education",
];

const CompanyInformation = ({ control, formData }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">
          {STEP_FORM_LABELS.STEP_2.COMPANY_FIELD}
        </FormLabel>
        <Box display="flex" flexDirection="column" marginTop={1}>
          {companyFields.map((field, index) => (
            <FormControlLabel
              key={index}
              control={
                <Controller
                  name={field}
                  control={control}
                  defaultValue={formData.step2?.[field] || false}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      checked={value}
                      onChange={(e) => {
                        onChange(e.target.checked);
                      }}
                    />
                  )}
                />
              }
              label={field.replace("companyField", "")}
            />
          ))}
        </Box>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">
          {STEP_FORM_LABELS.STEP_2.EMPLOYEE_COUNT}
        </FormLabel>
        <Controller
          name="numUsers"
          control={control}
          defaultValue={formData.step2?.numUsers || userOptions[0].value}
          rules={{ required: STEP_FORM_ERRORS.STEP_2.NUM_USERS_REQUIRED }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Autocomplete
              options={userOptions}
              getOptionLabel={(option) => option.label}
              value={
                userOptions.find((option) => option.value === value) || null
              }
              onChange={(_, newValue) =>
                onChange(newValue ? newValue.value : "")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={STEP_FORM_LABELS.STEP_2.EMPLOYEE_COUNT}
                  margin="normal"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
          )}
        />
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">
          {STEP_FORM_LABELS.STEP_2.WFH_POLICY}
        </FormLabel>
        <Controller
          name="wfhPolicy"
          control={control}
          defaultValue={formData.step2?.wfhPolicy || "no"}
          rules={{ required: STEP_FORM_ERRORS.STEP_2.WFH_POLICY_REQUIRED }}
          render={({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          )}
        />
      </FormControl>
    </Box>
  );
};

export default CompanyInformation;
