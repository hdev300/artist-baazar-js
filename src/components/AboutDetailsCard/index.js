/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Stack, Card, CardMedia, Typography, Grid } from "@mui/material";

const AboutDetailsCard = ({ row }) => {
  const { title, description, image, direction } = row;
  return (
    <Card elevation={5}>
      <Grid container display="flex" direction={direction}>
        <Grid item xs={12} sm={9} pl={3} pr={3} pt={2}>
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
            mt={1}
            variant="body1"
            color="text.primary"
            component="div"
          >
            {description}
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={image}
            alt="Live from space album cover"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutDetailsCard;
