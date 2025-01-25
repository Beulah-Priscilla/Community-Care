import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 2, mt: 'auto', bgcolor: 'primary.main', color: 'white'}}>
      <Typography variant="body2">
        © {new Date().getFullYear()} CommunityCare. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer;