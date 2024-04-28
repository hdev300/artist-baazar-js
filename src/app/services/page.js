/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Grid } from "@mui/material";
import { servicesData } from "@/mock-data";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <Grid container p={{ xs: 3, sm: 5 }} bgcolor="#FFFFFF" spacing={2}>
      {servicesData.map((row, index) => {
        return (
          <Grid item xs={12} key={index}>
            <ServiceCard row={row} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Services;
