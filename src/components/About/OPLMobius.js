import React from "react";
import { Link } from "gatsby";
import { Box, Typography } from "@mui/material";
import { CCHeart } from "../../assets/icons/index";

const OPLMobius = () => (
  <Box data-testid="pageGrid" width="100%" my={8}>
    <Typography gutterBottom variant="h4" component="h3" color="primary">
    How This Library Relates to the Open Practice Library and the Mobius Loop
    </Typography>
    <Typography gutterBottom>
    The Stellafai Practice Library is a curated, downstream version of the Open Practice Library, which is itself based on the Mobius Loop.
    </Typography>
    <Typography gutterBottom>
    Unless otherwise noted, content on this site is licensed under a {" "}
      <Link
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noopener"
      >
        <CCHeart />
        Creative Commons Attribution 4.0
      </Link>{" "}
    International license.
    </Typography>
    <Typography gutterBottom>
    As a downstream project, any additions or modifications to practices in this library should be made upstream in the Open Practice Library. While this library presents a more focused and opinionated subset of the practices, we invite feedback from the community. If you believe a key practice is missing, let us know so we can evaluate adding it here.   </Typography>
    <Typography gutterBottom>
    Similarly, if the Open Practice Library lacks a practice you feel is essential, we encourage you to contribute directly to the upstream project. We’ll be delighted to collaborate with you to include it in this library.    </Typography>
  </Box>
);

export default OPLMobius;
