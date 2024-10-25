import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { STEP_FORM_LABELS, STEP_FORM_ERRORS } from "../../constants/Constants";

const states = [
  { label: "Gujarat" },
  { label: "Rajasthan" },
  { label: "Maharastra" },
  { label: "Uttar Pradesh" },
];

const PersonalInformation = ({ control, formData }) => {
  return (
    <>
      <Controller
        name="firstName"
        control={control}
        defaultValue={formData.step1?.firstName || ""}
        rules={{ required: STEP_FORM_ERRORS.STEP_1.FIRST_NAME_REQUIRED }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={STEP_FORM_LABELS.STEP_1.FIRST_NAME}
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue={formData.step1?.lastName || ""}
        rules={{ required: STEP_FORM_ERRORS.STEP_1.LAST_NAME_REQUIRED }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={STEP_FORM_LABELS.STEP_1.LAST_NAME}
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue={formData.step1?.email || ""}
        rules={{
          required: STEP_FORM_ERRORS.STEP_1.EMAIL_REQUIRED,
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: STEP_FORM_ERRORS.STEP_1.EMAIL_INVALID,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={STEP_FORM_LABELS.STEP_1.EMAIL}
            type="email"
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="companyName"
        control={control}
        defaultValue={formData.step1?.companyName || ""}
        rules={{ required: STEP_FORM_ERRORS.STEP_1.COMPANY_NAME_REQUIRED }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={STEP_FORM_LABELS.STEP_1.COMPANY_NAME}
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="companyWebsite"
        control={control}
        defaultValue={formData.step1?.companyWebsite || ""}
        rules={{
          required: STEP_FORM_ERRORS.STEP_1.COMPANY_WEBSITE_REQUIRED,
          pattern: {
            value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/,
            message: STEP_FORM_ERRORS.STEP_1.COMPANY_WEBSITE_INVALID,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={STEP_FORM_LABELS.STEP_1.COMPANY_WEBSITE}
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="state"
        control={control}
        defaultValue={formData.step1?.state || ""}
        rules={{ required: STEP_FORM_ERRORS.STEP_1.STATE_REQUIRED }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Autocomplete
            options={states}
            getOptionLabel={(option) => option.label}
            value={states.find((state) => state.label === value) || null}
            onChange={(_, newValue) => onChange(newValue ? newValue.label : "")}
            renderInput={(params) => (
              <TextField
                {...params}
                label={STEP_FORM_LABELS.STEP_1.STATE}
                margin="normal"
                error={!!error}
                helperText={error?.message}
                fullWidth
              />
            )}
          />
        )}
      />
      <Controller
        name="zipCode"
        control={control}
        defaultValue={formData.step1?.zipCode || ""}
        rules={{
          required: STEP_FORM_ERRORS.STEP_1.ZIP_CODE_REQUIRED,
          pattern: {
            value: /^\d{5}$/,
            message: STEP_FORM_ERRORS.STEP_1.ZIP_CODE_INVALID,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={STEP_FORM_LABELS.STEP_1.ZIP_CODE}
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
    </>
  );
};

export default PersonalInformation;
