import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Requests: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography>
        Submit a Request
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" margin="normal" required/>
        <TextField fullWidth label="Location" margin="normal" required/>
        <TextField fullWidth label="Describe your request"
        multiline rows={4} margin="normal" required/>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
    )

};

export default Requests;