import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../store/formSlice";
import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";
import PersonalInformation from "./FormSteps/PersonalInformation";
import CompanyInformation from "./FormSteps/CompanyInformation";
import PlanSelection from "./FormSteps/PlanSelection";
import CustomButton from "./CommonComponents/CustomButton";

const steps = ["Personal Information", "Company Information", "Plan Selection"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { control, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const [price, setPrice] = useState(0);

  const onSubmit = (data) => {
    dispatch(updateFormData({ step: `step${activeStep + 1}`, data }));
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const numUsers = watch("numUsers") || 1;
  const planType = watch("plan") || "none";

  // Calculate price for plan selection
  useEffect(() => {
    const planPrices = {
      monthly: { gold: 10, titanium: 20 },
      yearly: { gold: 100, titanium: 200 },
    };
    const planCategory = planType.includes("monthly") ? "monthly" : "yearly";
    const planName = planType.includes("gold") ? "gold" : "titanium";
    const basePrice = planPrices[planCategory][planName] || 0;
    setPrice(basePrice * numUsers);
  }, [numUsers, planType]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Multi Step Form
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: { xs: "90%", sm: "50%" },
          maxHeight: "80vh",
          padding: 3,
          border: 1,
          borderRadius: 2,
          borderColor: "divider",
          backgroundColor: "white",
          overflow: "auto",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps?.map((label, index) => (
            <Step key={`step${index}`}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ marginTop: 3 }}>
          {activeStep === 0 && (
            <PersonalInformation control={control} formData={formData} />
          )}

          {activeStep === 1 && (
            <CompanyInformation control={control} formData={formData} />
          )}

          {activeStep === 2 && (
            <PlanSelection control={control} price={price} />
          )}

          <Box sx={{ marginTop: 2, display: "flex", gap: "8px" }}>
            {activeStep > 0 && (
              <CustomButton
                variant="outlined"
                text="Back"
                onClick={handleBack}
              />
            )}
            <CustomButton
              type="submit"
              text={activeStep === steps.length - 1 ? "Finish" : "Next"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MultiStepForm;
