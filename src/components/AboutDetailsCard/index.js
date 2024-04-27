/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Stack, CardMedia, Typography, Grid } from "@mui/material";

const AboutDetailsCard = ({ row }) => {
  const { title, description, image } = row;
  return (
    <Grid container display="flex">
      <Grid item xs={12} sm={8}>
        <Stack direction="row" gap={1} display="flex" alignItems="center">
          <img
            src="/images/about-us/about.svg"
            alt="gesg"
            height={40}
            width={40}
          />
          <Typography
            align="justify"
            fontSize={{
              xs: 26,
              lg: 28,
            }}
          >
            {title}
          </Typography>
        </Stack>
        <Typography
          align="justify"
          fontSize={{
            xs: 20,
            lg: 22,
          }}
        >
          {description}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CardMedia
          image={image}
          title="logo"
          sx={{
            height: {
              xs: 100,
              lg: 225,
              xl: 350,
            },
            width: {
              xs: 100,
              lg: 225,
              xl: 350,
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AboutDetailsCard;
