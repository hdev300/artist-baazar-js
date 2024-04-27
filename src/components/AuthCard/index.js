import React from "react";
import { Grid, Typography } from "@mui/material";

const AuthCard = ({ title, children }) => {
  return (
    <Grid container p={4} bgcolor="#FFFFFF" boxShadow={10} borderRadius={5}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Typography variant="h4" fontWeight={500} color="#333333">
          {title}
        </Typography>
      </Grid>
      {children}
    </Grid>
  );
};

export default AuthCard;
