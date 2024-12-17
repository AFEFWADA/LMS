import React from 'react';
import FeaturedTest from './FeaturedTest';
import LineChart from './LineDatas';
import Sidebarr from './Sidebar';
import { mockTransactions } from './Data';
import { Box, Typography } from "@mui/material";
import PieChart from './Piechart';

const Dashboard = ({ user }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: "#f8f9fa" }}>
      {/* Sidebar */}
      <div
        style={{
          flex: '0 0 250px',
          height: '100vh',
          backgroundColor: "#f8f9fa",
          transition: 'all 0.3s ease', // Smooth transition on hover
          '&:hover': {
            boxShadow: '0px 8px 16px rgba(146, 130, 179, 0.44)', // Hover shadow effect
            transform: 'translateY(-5px)', // Slight hover lift effect
          },
        }}
      >
        <Sidebarr />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          overflowY: 'auto',
          backgroundColor: '#fff',
          transition: 'all 0.3s ease', // Smooth transition on hover
          '&:hover': {
            boxShadow: '0px 8px 16px rgba(146, 130, 179, 0.44)', // Hover shadow effect
            transform: 'translateY(-5px)', // Slight hover lift effect
          },
        }}
      >
        {/* Featured Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <FeaturedTest />
        </div>

        {/* LineChart and Transactions Section */}
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
            height: '45vh',
            justifyContent: 'space-between',
          }}
        >
          {/* LineChart */}
          <div
            style={{
              flex: '1',
              marginRight: '20px',
              backgroundColor: '#fafafa',
              borderRadius: '8px',
              padding: '10px',
              transition: 'all 0.3s ease', // Smooth transition on hover
              '&:hover': {
                boxShadow: '0px 8px 16px rgba(146, 130, 179, 0.44)', // Darker shadow on hover
                transform: 'translateY(-5px)', // Slight hover effect
              },
            }}
          >
            <LineChart />
          </div>

          {/* Transactions */}
          <div
            style={{
              flex: '1',
              marginLeft: '20px',
              backgroundColor: '#f7f7f7',
              padding: '15px',
              borderRadius: '8px',
              overflow: 'auto',
              transition: 'all 0.3s ease', // Smooth transition on hover
              '&:hover': {
                boxShadow: '0px 8px 16px rgba(146, 130, 179, 0.44)', // Darker shadow on hover
                transform: 'translateY(-5px)', // Slight hover effect
              },
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="4px solid rgb(58, 105, 134)"
              color="#3C3C3C"
              p="15px"
              backgroundColor="#eaeaea"
            >
              <Typography color="#3C3C3C" variant="h6" fontWeight="300">
                Recent Tests
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px solid #e0e0e0"
                p="15px"
                backgroundColor="#fafafa"
                sx={{
                  transition: 'all 0.3s ease', // Smooth transition on hover
                  '&:hover': {
                    backgroundColor: '#eaeaea', // Highlight on hover
                  },
                }}
              >
                <Box>
                  <Typography color="#4CAF50" variant="h6" fontWeight="400">
                    {transaction.txId}
                  </Typography>
                  <Typography color="#3C3C3C">{transaction.user}</Typography>
                </Box>
                <Box color="#3C3C3C">{transaction.date}</Box>
                <Box
                  backgroundColor="#4CAF50"
                  p="5px 10px"
                  borderRadius="1px"
                  color="#fff"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </div>
        </div>

        {/* PieChart Section */}
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
            backgroundColor: '#f8f8f8',
            borderRadius: '8px',
            padding: '10px',
            transition: 'all 0.3s ease', // Smooth transition on hover
            '&:hover': {
              boxShadow: '0px 8px 16px rgba(146, 130, 179, 0.44)', // Hover shadow effect
              transform: 'translateY(-5px)', // Slight hover effect
            },
          }}
        >
          <div style={{ width: '90%', height: '100%' }}>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
