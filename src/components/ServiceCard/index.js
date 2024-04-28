import React from "react";
import { Card, Grid, CardMedia, Typography } from "@mui/material";
import ArtistButton from "../ArtistButton";

const ServiceCard = ({ row }) => {
  const { title, description, price, image, bgColor, direction } = row;
  return (
    <Card elevation={5}>
      <Grid container bgcolor={bgColor} direction={direction}>
        <Grid item xs={9} pl={3} pr={3} pt={2}>
          <Typography gutterBottom component="div" variant="h5">
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
            variant="subtitle2"
            color="text.secondary"
            component="div"
            mt={3}
            mb={2}
          >
            Starting from {price}
          </Typography>
          <ArtistButton text="Get Call" className="orange-bg br-20" />
        </Grid>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%", backgroundColor: "red" }}
            image={image}
            alt="Live from space album cover"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ServiceCard;
