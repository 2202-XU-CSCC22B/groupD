import { Box, Button, Icon, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import LearnMoreModal from "@modules/components/landingPage/LearnMoreModal";
import { styled } from "@mui/system";
export default function ProductDescription(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("Open");
    setOpen(!open);
  };

  const CenteredIcon = styled("div")`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  line-height: 0;
`;


  return (
    <Paper
      sx={{
        padding: "1rem",
        textAlign: "center",
        backgroundColor: "#fff",
        height: "100%",
      }}
      elevation={12}
    >
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          {props.title}
        </Typography>
        <Box sx={{ fontSize: "2rem", transform: "scale(2)", marginTop:4}}>
          <CenteredIcon>
  <Icon>{props.icon}</Icon>
  </CenteredIcon>
</Box>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          {props.description}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#404040", color: "#0D0D0D" }}
          onClick={handleOpen}
        >
          Learn More
        </Button>
        <LearnMoreModal open={open} onClose={() => setOpen(!open)} />
      </Box>
    </Paper>
  );
}

ProductDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired,
  icon: PropTypes.element,
};
