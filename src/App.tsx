import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 2 }}>
          <h2>Welcome to CommunityCare</h2>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
