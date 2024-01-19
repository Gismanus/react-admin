import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={2}>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            An Important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Where it is</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Who am I</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            Not Important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>What is this App?</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Where is my money?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            Favourite
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Why sky is blue?</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
