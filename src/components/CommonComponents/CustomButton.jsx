import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text, variant = "contained", onClick, ...rest }) => {
  return (
    <Button variant={variant} onClick={onClick} {...rest}>
      {text}
    </Button>
  );
};

export default CustomButton;
