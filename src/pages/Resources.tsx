import { Box, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import React from "react";
import Map from '../components/Map';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'Local Food Banks',
      description: 'Find nearby food banks to help with groceries and meals.',
      link: 'https://www.foodbanks.ca',
    },
    {
      title: 'Emergency Shelters',
      description: 'Locate emergency shelters for temporary housing.',
      link: 'https://www.homelessshelterdirectory.org',
    },
    {
      title: 'Mental Health Support',
      description: 'Access free mental health counseling services.',
      link: 'https://www.mentalhealth.gov',
    },
    {
      title: 'Educational Resources',
      description: 'Explore free online courses and learning platforms.',
      link: 'https://www.khanacademy.org',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Available Resources
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {resources.map((resource, index) => (
          <Box width={{ xs: '100%', sm: '48%', md: '30%' }} key={index} mb={2}>
            <Card>
              <CardContent>
                <Typography>
                  {resource.title}
                </Typography>
                <Typography>
                  {resource.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Nearby Resources
        </Typography>
        <Map />
      </Box>
    </Box>
  );
};

export default Resources;