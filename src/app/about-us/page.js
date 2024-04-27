/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Stack, CardMedia, Typography, Grid } from "@mui/material";
import AboutUsCard from "@/components/AboutDetailsCard";
import { aboutUsContactsData, aboutUsData } from "@/mock-data";
import AboutUsContactCard from "@/components/AboutUsContactCard";

const AboutUs = () => {
  return (
    <Grid
      container
      p={{ xs: 3, sm: 0.5 }}
      bgcolor="#FFFFFF"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {aboutUsData.map((row, index) => {
        return (
          <Grid item xs={11} key={index}>
            <AboutUsCard row={row} />
          </Grid>
        );
      })}

      <Grid item xs={11}>
        <Grid container spacing={2}>
          {aboutUsContactsData.map((row, index) => {
            return (
              <Grid item xs={12} sm={4} key={index}>
                <AboutUsContactCard row={row} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
