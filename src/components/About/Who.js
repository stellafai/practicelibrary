import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Who = () => (
  <Box data-testid="pageGrid" width="100%" my={8}>
    <Typography gutterBottom variant="h4" component="h3" color="primary">
    Who Is This For?
    </Typography>
    <Typography gutterBottom>
    The practices in this library are designed to empower Customer Success Managers (CSMs), teams, and leaders to collaborate and deliver measurable success iteratively. Whether you’re managing customer relationships, driving adoption, or ensuring alignment with business outcomes, this library provides practical guidance and tools. Here’s how it can help:
    <ul>
      <li>Customer Success Managers: Build strong relationships, drive customer adoption, and deliver measurable outcomes by aligning strategies with customer goals.</li>
      <li>Customer Success Leaders: Guide teams to operate effectively, foster alignment across departments, and scale customer success initiatives to achieve consistent results.</li>
      <li>Account Managers: Identify and address customer challenges, ensure seamless renewals, and uncover upsell opportunities through collaborative practices.</li>
      <li>Implementation Teams: Use structured approaches to streamline onboarding, reduce time-to-value, and ensure successful product adoption.</li>
      <li>Customer Stakeholders: Gain clarity on roadmaps and leverage metrics-based insights to measure success and improve collaboration with success teams.</li>
    </ul>
    These practices are created, tested, and shared by individuals actively working in customer success. Whether you’re looking for innovative ideas to address customer challenges, improve team performance, or drive better outcomes, this library serves as a trusted resource.    </Typography>
  </Box>
);

export default Who;