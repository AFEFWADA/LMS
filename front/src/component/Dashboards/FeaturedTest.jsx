import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import StatBox from './StatBox';

function FeaturedTest() {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box mb="30px">
        <Typography
          variant="h4"
          color="#333"
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          Dashboard
        </Typography>
        <Typography variant="h6" color="#868dfb">
          Welcome to your dashboard
        </Typography>
      </Box>

      {/* GRID & STATS */}
      <Grid container spacing={3}>
        {/* ROW 1 */}
        {[ 
          { certificate: "PHP", date: "12-02-2019" },
          { certificate: "Java", date: "12-02-2019" },
          { certificate: "Machine Learning", date: "12-02-2019" },
          { certificate: "Reseau", date: "12-02-2019" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                backgroundColor: "#ffffff", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "120px",
                padding: "10px",
                borderRadius: "8px", // Rounded corners for a softer look
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Lighter shadow
                transition: "all 0.3s ease", // Smooth transition on hover
                '&:hover': {
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)", // Darker shadow on hover
                  transform: "translateY(-5px)", // Slight hover effect
                },
              }}
            >
              <StatBox certificate={item.certificate} date={item.date} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedTest;
