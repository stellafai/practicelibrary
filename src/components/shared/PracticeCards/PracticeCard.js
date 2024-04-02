import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import mobiusContent from "../../../utilities/mobiusContent";

const PracticeCard = ({
  coverImage,
  mobiusTag,
  practiceId,
  practiceTitle,
  slug,
  subtitle,
  tags,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const tag = mobiusTag.toLowerCase();
  return (
    <Grid
      item
      component={Link}
      to={slug}
      style={{ textDecoration: "none" }}
      data-testid={practiceId}
      xs={12}
      sm={6}
      md={4}
    >
      <Card
        data-testid="practicecard"
        raised={hovered}
        onMouseOut={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
        style={{ cursor: "pointer", height: "100%", width: "100%" }}
      >
        <Box
          borderBottom={4}
          color={mobiusContent[tag].color}
          bgcolor="grey.300"
          position="relative"
        >
          <GatsbyImage
            alt={practiceTitle}
            imgStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
            image={coverImage}
            style={{ width: "100%", height: "12rem" }}
            title={practiceTitle}
          />
          <Box
            bgcolor={mobiusContent[tag].color}
            position="absolute"
            height="2rem"
            width="2rem"
            bottom={0}
            right={0}
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ borderTopLeftRadius: ".25rem" }}
          >
            {mobiusContent[tag].icon}
          </Box>
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            data-testid="practicetitle"
          >
            {practiceTitle}
          </Typography>
          <Typography component="p" gutterBottom variant="subtitle1">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default PracticeCard;
