/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Card, Stack, Typography } from "@mui/material";

const AboutUsContactCard = ({ row }) => {
  const { title, image } = row;
  return (
    <Card elevation={5}>
      <Grid container p={3} display="flex" justifyContent="center">
        <Grid item xs={10}>
          <Stack direction="column" gap={3} display="flex" alignItems="center">
            <img src={image} alt="gesg" height={50} width={50} />
            <Typography minHeight={50} variant="body1" align="center">
              {title}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutUsContactCard;
