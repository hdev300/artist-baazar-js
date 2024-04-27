import React, { useState } from "react";
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ArtistTextfield = ({
  type,
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  variant,
  name,
  touched,
  errors,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword((show) => !show);

  return (
    <>
      {label && (
        <Typography variant="body1" color="#666666">
          {label}
        </Typography>
      )}
      <TextField
        size="medium"
        name={name}
        fullWidth
        type={
          type === "password" ? (showPassword ? "text" : "password") : "text"
        }
        // label={label}
        placeholder={placeholder || ""}
        variant={variant}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        touched={touched?.toString() || "false"}
        error={Boolean(errors)}
        helperText={errors}
        disabled={disabled}
        InputProps={{
          sx: { borderRadius: 3 },
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
    </>
  );
};

export default ArtistTextfield;
