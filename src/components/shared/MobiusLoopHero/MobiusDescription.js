import React from "react";
import { Box, Divider, Typography } from "@mui/material";
const MobiusDescription = () => (
  <Box>
    <Box marginBottom={2}>
      <Typography align="center" variant="h5" component="h3" gutterBottom>
        Welcome to the Stellafai Practice Library
      </Typography>
      <Divider />
    </Box>
    <Typography gutterBottom variant="body2">
      A set of reusable practices inspired by the Open Practice Library.
    </Typography>
    <Typography gutterBottom variant="body2">
      This Practice Library is organized around the Mobius Loop - an iterative process model for rapidly learning and delivering customer success.
    </Typography>
    <Typography variant="body2">
      The buttons below will show you practices that fall on the relevant part
      of the loop.
    </Typography>
  </Box>
);
export default MobiusDescription;
