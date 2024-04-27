/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Card, Stack, Typography } from "@mui/material";

const AboutUsContactCard = ({ row }) => {
  const { title, image } = row;
  return (
    <Card elevation={5}>
      <Grid container p={3} display="flex" justifyContent="center">
        <Grid item xs={8}>
          <Stack direction="column" gap={3} display="flex" alignItems="center">
            <img src={image} alt="gesg" height={40} width={40} />
            <Typography variant="body1">{title}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutUsContactCard;
