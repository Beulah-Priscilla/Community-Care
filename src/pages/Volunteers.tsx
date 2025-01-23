import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Volunteers: React.FC = () => {
  const opportunities = [
    {
      title: 'Grocery Delivery', description: 'Help deliver groceries to seniors.'
    },
    {
      title: 'Tutoring', description: 'Provide online tutoring to children in need.'
    },
  ];
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Volunteer Opportunities
      </Typography>
      {opportunities.map((opportunity, index) => (
        <Card key={index} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">{opportunity.title}</Typography>
          <Typography variant="body2" color="textSecondary">{opportunity.description}</Typography>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </CardContent>
      </Card>
      ))}
    </Box>
  );
};

export default Volunteers;