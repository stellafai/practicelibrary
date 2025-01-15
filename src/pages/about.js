import React from "react";
import { Box, Container, Typography } from "@mui/material";
import HeroColor from "../components/shared/HeroColor";
import Intro from "../components/About/Intro";
import MobiusNavigate from "../components/About/MobiusNavigate";
import Who from "../components/About/Who";
import OPLMobius from "../components/About/OPLMobius";
import Layout from "../components/Layout";

export default function About(props) {
  return (
    <Layout
      ogContent={{
        title: "Stellafai's Practice Library",
        desc:
          "Practices that empower teams to collaborate and deliver iteratively",
        image:
          "https://cdn.prod.website-files.com/66fd74636f0cd08e0279e29f/678802be15ab7c598dd2edf4_stellafaiOg.png",
      }}
    >
      <Box data-testid="aboutPageGrid" display="flex" flexDirection="column">
        <HeroColor type="gradient" gradient={5}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h3" data-testid="hellotext">
              About the Stellafai Practice Library
            </Typography>
          </Container>
        </HeroColor>
        <Container maxWidth="md">
          <Intro />
          <MobiusNavigate />
          <Who />
          <OPLMobius />
        </Container>
      </Box>
    </Layout>
  );
}
