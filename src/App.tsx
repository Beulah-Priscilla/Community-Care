import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import Requests from './pages/Requests';
import Home from './pages/Home';
import Volunteers from './pages/Volunteers';
import Resources from './pages/Resources';
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flex: 1 }}>
      <Sidebar />
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
