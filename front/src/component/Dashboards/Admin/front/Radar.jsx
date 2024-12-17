import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { Box, Typography } from '@mui/material';
import { radarr as data } from '../../Data';

const Radarr = () => {
  // Check if data is available
  if (!data || data.length === 0) {
    return <Typography>No data available</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" padding="20px" color="#ffSZSf">

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="350px"
        padding="10px"
        borderRadius="8px"
        flexDirection="column"
            
      >
        {/* Pass data to the ResponsiveRadar component */}
        <ResponsiveRadar
          data={data} 
          keys={['chardonay', 'carmenere', 'syrah']}
          indexBy="taste"
          valueFormat=">-.2f"
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          borderColor={{ from: 'color' }}
          gridLabelOffset={36}
          dotSize={10}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          colors={{ scheme: 'nivo' }}
          blendMode="multiply"
          motionConfig="wobbly"
          legends={[
            {
              anchor: 'top-left',
              direction: 'column',
              translateX: -50,
              translateY: -40,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000'
                  }
                }
              ]
            }
          ]}
        />
      </Box>
    </Box>
  );
};

export default Radarr;
