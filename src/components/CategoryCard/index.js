import React from "react";
import { Card, Grid, CardMedia, Typography } from "@mui/material";
import ArtistButton from "../ArtistButton";

const CategoryCard = ({ row }) => {
  const { title, price, image } = row;
  return (
    <Card elevation={2}>
      <Grid container p={1} bgcolor="#FFFCEE">
        <Grid item xs={12}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: 250, borderRadius: 2 }}
            image={image}
            alt="Live from space album cover"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography mt={1} component="div" variant="h5">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            Starting from {price}
          </Typography>
        </Grid>

        <Grid item xs={12} mt={2} display="flex" justifyContent="center">
          <ArtistButton text="See All" className="orange-bg br-20" />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CategoryCard;
