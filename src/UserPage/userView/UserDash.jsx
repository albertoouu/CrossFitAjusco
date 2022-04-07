import "./UserView.css";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import UserCarousel from "./UserCarousel.jsx";

// import UserCarousel from "./UserCarousel.jsx";
import { UserRules} from "./UserRules.jsx"
import ScrollableFeed from 'react-scrollable-feed'





export function UserDash() {
  
  return (
  
    
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8} lg={9}>
              <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 635,
                  }}
                >
                <ScrollableFeed>
                 <UserCarousel sx={{ height: 680 }} /> 
                </ScrollableFeed>
                </Paper>
              </Grid>   
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 635,
                  }}
                >
                  <ScrollableFeed>
                    <UserRules />
                  </ScrollableFeed>
                </Paper>
              </Grid>    
            </Grid>
          </Container>
        </Box>
       
   
  );
}
 