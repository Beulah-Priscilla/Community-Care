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
  const stats = [
    { title: 'Total Volunteers', value: 120 },
    { title: 'Hours Volunteered', value: 3500 },
    { title: 'Projects Completed', value: 45 },
  ];

  const badges = [
    { title: 'Top Volunteer', description: 'Awarded for 100+ hours of service' },
    { title: 'Community Hero', description: 'Recognized for outstanding contributions' },
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
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Volunteer Stats
        </Typography>
        <Box display="flex" justifyContent="space-between">
          {stats.map((stat, index) => (
            <Card key={index} sx={{ flex: 1, mx: 1 }}>
              <CardContent>
                <Typography variant="h6">{stat.title}</Typography>
                <Typography variant="h4">{stat.value}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Volunteer Badges
        </Typography>
        <Box display="flex" justifyContent="space-between">
          {badges.map((badge, index) => (
            <Card key={index} sx= {{ flex: 1, mx: 1 }}>
              <CardContent>
                <Typography variant="h6">{badge.title}</Typography>
                <Typography variant="h4">{badge.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Volunteers;