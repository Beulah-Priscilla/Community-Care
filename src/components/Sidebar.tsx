import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const menuItems = [
    { text: 'Home', path:'/' },
    { text: 'Requests', path:'/requests' },
    { text: 'Volunteers', path: '/volunteers' },
    { text: 'Resources', path: '/resources' },
  ];


  return (
    <Drawer
    variant="permanent"
    sx={{
      width: 240,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
      },
    }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar;