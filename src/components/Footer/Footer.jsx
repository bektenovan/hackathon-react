import * as React from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import LooksIcon from "@mui/icons-material/Looks";
import { Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 0, sm: 10 }}
        py={{ xs: 0, sm: 8 }}
        // bgcolor="text.secondary"
        color={"dark"}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={{ xs: 3, sm: 1 }}>
                Help
              </Box>
              <Box>
                <Link href="/about-us" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/about-us" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/about-us" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={{ xs: 3, sm: 1 }}>
                Account
              </Box>
              <Box>
                <Link href="/login" color="inherit">
                  Account
                </Link>
              </Box>
              <Box>
                <Link href="/login" color="inherit">
                  Log in
                </Link>
              </Box>
              <Box>
                <Link href="/register" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={{ xs: 3, sm: 1 }}>
                Messages
              </Box>
              <Box>
                <Link href="/about-us" color="inherit">
                  Messages
                </Link>
              </Box>
              <Box>
                <Link href="/about-us" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/about-us" color="inherit">
                  History
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box className="footname"
            textAlign={"center"}
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}>
            RainBow Furniture &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
