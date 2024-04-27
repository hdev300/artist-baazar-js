/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Stack, CardMedia, Typography, Grid } from "@mui/material";
import AboutUsCard from "@/components/AboutDetailsCard";
import { aboutUsContactsData, aboutUsData, ArtistBazarDisplayCardData, artistModernCardData } from "@/mock-data";
import AboutUsContactCard from "@/components/AboutUsContactCard";
import WrapperComponent from "@/components/WrapperComponent";
import ArtistBazarDisplayCard from "@/components/ArtistBazarDisplayCard";
import ArtistModernCard from "@/components/ArtistModernCard";

const Dashboard = () => {
    return (
        <WrapperComponent>
            <Typography variant="h4" textAlign={"center"} width={"100%"}>Dashboard</Typography>
            <Typography variant="h6" textAlign={"justify"} width={"100%"} pl={2}>Information Cards</Typography>
            <Grid container spacing={4} p={2}>
                {ArtistBazarDisplayCardData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}  >
                        <ArtistBazarDisplayCard title={item.title} description={item.description} image={item.image} />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" textAlign={"justify"} width={"100%"} pl={2}>mordern Cards</Typography>
            <Grid container spacing={4} p={2}>
                {artistModernCardData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}  >
                        <ArtistModernCard title={item.title} />
                    </Grid>
                ))}
            </Grid>
        </WrapperComponent>
    );
};

export default Dashboard;
