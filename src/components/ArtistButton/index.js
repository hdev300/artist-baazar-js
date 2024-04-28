import { Button } from "@mui/material";
import React from "react";

const ArtistButton = ({
  text,
  loadingText,
  className,
  fullWidth,
  variant,
  onClick,
  type,
  size,
  color,
  isLoading,
  disabled,
}) => {
  return (
    <Button
      className={className}
      fullWidth={fullWidth || false}
      variant={variant || "contained"}
      onClick={onClick}
      type={type || "button"}
      disabled={isLoading || disabled || false}
      size={size || "small"}
      sx={{
        textTransform: "capitalize",
        fontWeight: 600,
        color: color || "#000000",
      }}
    >
      {isLoading ? loadingText : text}
    </Button>
  );
};

export default ArtistButton;
