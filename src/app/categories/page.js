/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Grid } from "@mui/material";
import { categoriesData } from "@/mock-data";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {
  return (
    <Grid container p={{ xs: 3, sm: 5 }} bgcolor="#FFFFFF" spacing={4}>
      {categoriesData.map((row, index) => {
        return (
          <Grid item xs={12} sm={3} key={index}>
            <CategoryCard row={row} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Categories;
