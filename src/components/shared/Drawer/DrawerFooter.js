import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Feedback, Newspaper } from "@mui/icons-material";

const DrawerFooter = () => (
  <Box
    sx={(theme) => ({
      margin: `auto ${theme.spacing(2)} ${theme.spacing(2)}`,
    })}
  >
    <List>
      <ListItemButton
        component="a"
        href="https://www.stellafai.com/"
      >
        <ListItemIcon>
          <Newspaper />
        </ListItemIcon>
        <ListItemText primary="Subscribe to my Newsletter" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="https://www.stellafai.com/contact/"
      >
        <ListItemIcon>
          <Feedback />
        </ListItemIcon>
        <ListItemText primary="Give us Feedback" />
      </ListItemButton>
    </List>
  </Box>
);

export default DrawerFooter;
