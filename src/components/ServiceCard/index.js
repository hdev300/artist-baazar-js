import React from "react";
import { Card, Grid, CardMedia, Typography } from "@mui/material";

const ServiceCard = ({ row }) => {
  const { title, description, price } = row;
  return (
    <Card>
      <Grid container>
        <Grid item xs={8}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {price}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/images/logo.svg"
            alt="Live from space album cover"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ServiceCard;
