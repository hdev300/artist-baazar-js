"use client";
import React from "react";
import {
  CardMedia,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArtistTextfield from "@/components/ArtistTextfield";
import ArtistButton from "@/components/ArtistButton";
import * as yup from "yup";
import { useFormik } from "formik";

const ResetPassword = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const signInSchema = yup.object().shape({
    email: yup.string().trim().email().required("Email is required"),
    password: yup.string().trim().required("Password is required"),
  });

  const { handleChange, handleBlur, isSubmitting, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: async (val, err) => {
        // await dispatch(loginUserByEmailAction(val)).then(async ({ payload }) => {
        //   if (payload.status === 200) {
        //     return setTimeout(async () => {
        //       await showSuccessMessage(payload.data.message);
        //       await dispatch(hideLoader());
        //       await navigate("/");
        //     }, []);
        //   }
        //   return setTimeout(async () => {
        //     await showErrorMessage(payload.data.message);
        //     await dispatch(hideLoader());
        //   }, []);
        // });
      },
    });

  return (
    <Grid
      container
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#1F1F1F"
      p={{ xs: 3, sm: 0.5 }}
    >
      {/* div1 start */}
      <Grid item xs={12} sm={10} md={8} lg={5} xl={5}>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              image="/images/logo.svg"
              title="logo"
              sx={{
                height: {
                  xs: 100,
                  lg: 225,
                  xl: 250,
                },
                width: {
                  xs: 100,
                  lg: 225,
                  xl: 250,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={8} mt={{ xs: 1, sm: 2 }}>
            <Typography
              align="center"
              fontSize={{
                xs: 28,
                sm: 30,
                md: 38,
                lg: 40,
                xl: 44,
              }}
              fontWeight={600}
              color="#FFFFFF"
              // sx={{
              //   backgroundColor: {
              //     xs: "red",
              //     sm: "yellow",
              //     md: "silver",
              //     lg: "pink",
              //     xl: "green",
              //   },
              // }}
            >
              Discover The Perfect Artist
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* div1 end */}

      {/* div2 start */}
      <Grid item xs={12} sm={10} md={8} lg={7} xl={7}>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={10}
            lg={10}
            xl={7}
            p={4}
            sx={{
              backgroundColor: "#FFFFFF",
              boxShadow: 3,
              borderRadius: 5,
            }}
          >
            <Grid container>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Typography variant="h4" fontWeight={500} color="#333333">
                  Log in
                </Typography>
              </Grid>

              <Grid item xs={12} mt={1} display="flex" justifyContent="center">
                <Typography variant="body2" gutterBottom color="#666666">
                  New to Artist Bazaar?&nbsp;
                  <b
                    onClick={() => navigate("/signup")}
                    style={{
                      cursor: "pointer",
                      width: "fit-content !important",
                      textDecoration: "underline",
                      color: "#111111",
                    }}
                  >
                    Sign up for free
                  </b>
                </Typography>
              </Grid>

              <Grid item xs={12} mt={3}>
                <ArtistTextfield
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.email}
                  errors={errors?.email}
                />
              </Grid>

              <Grid item xs={12} mt={3}>
                <ArtistTextfield
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.password}
                  errors={errors?.password}
                />
              </Grid>

              <Grid item xs={12} mt={1}>
                <Typography
                  onClick={() => navigate("/forgot-password")}
                  variant="body2"
                  gutterBottom
                  sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#111111",
                  }}
                >
                  <b>Forgot Password?</b>
                </Typography>
              </Grid>

              <Grid item xs={12} mt={2}>
                <ArtistButton
                  fullWidth
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  type="submit"
                  size="large"
                  text="Log in"
                  loadingText="Log in..."
                  className="orange-bg br-20"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* div2 end */}
    </Grid>
  );
};

export default ResetPassword;