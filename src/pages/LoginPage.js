import React from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
function LoginPage() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            height: "80vh",
            width: {
              md: "70%",
              sm: "80%",
              xs: "90%",
            },
            backgroundColor: "white",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <Grid
            item
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
            md={6}
          >
            <Grid
              container
              sx={{
                minHeight: "70%",
                width: {
                  md: "300px",
                  sm: "80%",
                  xs: "90%",
                },
                // backgroundColor: "blue",
                padding: 3,
              }}
            >
              <h2>WELCOME BACK</h2>
              <Link href="#google.com" underline="none">
                {'underline="www.google.com"'}
              </Link>
              <Box
                component="form"
                sx={{
                  height: "60%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
                <Typography
                  fontWeight={"bold"}
                  color={"black"}
                  fontSize={10}
                  ml={19}
                >
                  Forget Password?
                </Typography>
              </Box>
              <Button
                sx={{
                  width: "200px",
                  alignItems: "center",
                  JustifyContent: "center",
                  textAlign: "center",
                  margin: "auto",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                Log In
              </Button>
            </Grid>
            <Typography color={"grey"} mt={1} fontSize={12}>
              Don't have an account yet?
              <span
                style={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Register Now
              </span>
            </Typography>
          </Grid>

          <Grid
            item
            sx={{
              backgroundColor: "pink",
            }}
            xs={12}
            md={6}
          >
            Appears Image
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LoginPage;
