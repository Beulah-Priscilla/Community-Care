import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to CommunityCare
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Empowering Communities, One Step at a Time
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
        CommunityCare is a platform dedicated to connecting people in need with volunteers and resources in their area.
        Join us in building stronger, more caring communities.
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2>
            <Button variant="contained" color="primary" href="/requests">
              Submit a Request
            </Button>
          </Grid2>
          <Grid2>
            <Button variant="contained" color="secondary" href="/volunteers">
              Become a Volunteer
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  )
};

export default Home;