import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../static/favicon.png";
import { useLocation } from "react-router-dom";
import { links } from "./links";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = 'Ananthan';
  }, [pathname]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={3}>
        <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: "center" }}>
            <img src={logo} width={300} height={300} alt="logo" />
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="h3">Ananthan Rajasekharan</Typography>
            </Grid>
            <br/>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography width={550} variant="subtitle1" gutterBottom>
              
              I like isekai stories where the hero gets teleported to a magical world and acquires magical abilities. While I haven't experienced that yet, there are still two places where I can practice magic:  within the imaginary realms and through the art of programming.... I aim to become a Grate sage 😎
              <br/><br/>
              The only real limitation is the one you set for yourself.
                {/* Better an{' '}
                <Box fontWeight="fontWeightMedium" display="inline">
                  oops
                </Box>{' '}
                than a{' '}
                <Box fontWeight="fontWeightMedium" display="inline">
                  what if
                </Box> */}
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Stack direction="row" spacing={0.4}>
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton color="inherit">{link.icon}</IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
