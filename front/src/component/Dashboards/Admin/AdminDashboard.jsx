import SidebarComponent from "./Sidebar";
import GeographyChart from "./front/Geo";
import { Box, Typography } from "@mui/material";
import Radarr from "./front/Radar";

const Dashboard = () => {
  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <SidebarComponent />
      
      <Box
        flex="1"
        m="20px"
        color="#ffffff"
        p="20px"
        display="flex"
        flexDirection="column"
      >
        {/* Dashboard Grid Layout */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="auto"
          gap="20px"
          marginBottom="20px"
        >
          {/* Radar Chart on the Left */}
          <Box
            gridColumn="span 5" 
            padding="20px"
            borderRadius="8px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5" fontWeight="300" sx={{ marginBottom: "15px" , color: "black" }}>
              Wine Taste Radar Chart
            </Typography>
            <Box height="400px" width="100%">
              <Radarr />
            </Box>
          </Box>

          {/* Geography Based Traffic */}
          <Box
            gridColumn="span 7" // Adjust to fill the remaining space
            backgroundColor={"#727681"}
            padding="20px"
            borderRadius="8px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          >
            <Typography variant="h5" fontWeight="300" sx={{ marginBottom: "15px" }}>
              Geography Based Traffic
            </Typography>
            <Box height="400px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
