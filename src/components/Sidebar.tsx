import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const Sidebar: React.FC = () => {
  const menuItems = ['Home', 'Requests', 'Volunteers', 'Resources'];

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
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>  
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar;