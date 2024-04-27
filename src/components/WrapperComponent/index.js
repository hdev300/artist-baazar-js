import React, { Profiler, useEffect, useState } from "react";
import { Grid, Paper, Box, Tabs, Tab } from "@mui/material";
import DashboardHeader from "@/components/dashboardHeader";
import { usePathname, useRouter } from "next/navigation";
import * as netRouter from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export default function WrapperComponent({ children }) {
  const { push } = useRouter();
  const theme = useTheme();
  const mainPathName = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const pathName = mainPathName.split("/")[1].replace("", "/");
  console.log("mainPathName", pathName);

  return (
    <Grid container>
      <Grid item xs={12}>
        <DashboardHeader />
      </Grid>
      <Grid
        item
        xs={12}
        lg={12}
        // height={"83dvh"}
        // p={isMobile ? 2 : 4}
        // pl={1}
      >
        {Array.isArray(children) ? children : [children]}
      </Grid>
    </Grid>
  );
}
