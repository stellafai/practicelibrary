import React from "react";
import { Link } from "gatsby"
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import MobiusLoopHero from "../shared/MobiusLoopHero";

const MobiusNavigate = () => (
  <Box data-testid="pageGrid" width="100%" my={8}>
    <Typography gutterBottom variant="h4" component="h3" color="primary">
    The Mobius Loop Helps Navigate The Practices
    </Typography>
    <Typography gutterBottom>
    Every practice in this library is mapped to the Mobius Loop—a navigation model developed by an open-source community. The Mobius Loop provides a visual framework for generating outcomes by fostering a continuous flow of learning, from discovery to options to delivery. The Open Practice Library added a foundational layer of cultural and technical practices to this model.
    </Typography>
    <Typography gutterBottom>
    Practices in the Stellafai Practice Library are categorized into four parts of the loop:
    </Typography>
    <Box my={4}>
          <MobiusLoopHero showContent={false} />
        </Box>
    <Typography gutterBottom>
    <ul>
      <li><Link to="/tags/discovery"><b>Discovery</b></Link> - practices to help define target outcomes.</li>
      <li><Link to="/tags/options"><b>Options</b></Link> - practices to help identify the path to the right outcomes.</li>
      <li><Link to="/tags/delivery"><b>Delivery</b></Link> - practices to put your ideas to the test. Learn what works and what doesn’t.</li>
      <li><Link to="/tags/foundation"><b>Foundation</b></Link> - Cultural practices and technical practices in the foundational layer that accelerate and maximise the use of the Mobius Loop.</li>
    </ul>
    </Typography>
  </Box>
);

export default MobiusNavigate;