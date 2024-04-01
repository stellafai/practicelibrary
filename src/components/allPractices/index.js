import React from "react";
import { Box, Container, Hidden } from "@mui/material";
import MobiusLoopHero from "../shared/MobiusLoopHero";
import FilterBar from "./FilterBar";
import CustomLogo from "../../components/shared/CustomLogo";

const Practices = ({ children, selectedMobiusLoopFilter }) => (
  <Container maxWidth="md">
    <Hidden smDown implementation="css">
      <Box marginTop={2} marginBottom={3}>
        <CustomLogo data-testid="site-logo" small horizontal />
      </Box>
    </Hidden>
    <MobiusLoopHero displaySection={selectedMobiusLoopFilter} />
    <Box my={{ xs: 1, md: 2, lg: 4 }}>
      <FilterBar selectedFilter={selectedMobiusLoopFilter} />
    </Box>
    {children}
  </Container>
);

export default Practices;
