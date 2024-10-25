import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { STEP_FORM_LABELS, STEP_FORM_ERRORS } from "../../constants/Constants";

const PlanSelection = ({ control, formData, price }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{STEP_FORM_LABELS.STEP_3.PLAN_TYPE}</FormLabel>
        <Controller
          name="plan"
          control={control}
          defaultValue={formData?.step3?.plan || "none"}
          rules={{ required: STEP_FORM_ERRORS.STEP_3.PLAN_REQUIRED }}
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel
                value="monthly_gold"
                control={<Radio />}
                label="Monthly Gold ($10/user)"
              />
              <FormControlLabel
                value="yearly_titanium"
                control={<Radio />}
                label="Yearly Titanium ($200/user)"
              />
            </RadioGroup>
          )}
        />
      </FormControl>

      <Box marginTop={2}>
        <Typography variant="h6">Order Summary</Typography>
        <Typography variant="body1">Selected Plan Price: ${price}</Typography>
      </Box>
    </Box>
  );
};

export default PlanSelection;