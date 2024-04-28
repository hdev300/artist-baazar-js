"use client";
import { Typography, Grid, CardMedia, Box, Stack } from "@mui/material";
import DashboardHeader from "@/components/dashboardHeader";
import WrapperComponent from "@/components/WrapperComponent";
import ArtistBazarDisplayCard from "@/components/ArtistBazarDisplayCard";
import { ArtistBazarDisplayCardata, artistModernCardData } from "@/mock-data";
import ArtistModernCard from "@/components/ArtistModernCard";

export default function Home() {
  return (
    <WrapperComponent>
      <Typography variant="h4" textAlign={"center"} width={"100%"}>
        Dashboard
      </Typography>
      <Typography variant="h6" textAlign={"justify"} width={"100%"} pl={2}>
        Information Cards
      </Typography>
      <Grid container spacing={4} p={2}>
        {ArtistBazarDisplayCardata.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ArtistBazarDisplayCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" textAlign={"justify"} width={"100%"} pl={2}>
        mordern Cards
      </Typography>
      <Grid container spacing={4} p={2}>
        {artistModernCardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <ArtistModernCard title={item.title} />
          </Grid>
        ))}
      </Grid>
    </WrapperComponent>
  );
}
