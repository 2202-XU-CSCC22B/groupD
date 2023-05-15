import {Box, Button, Icon, Paper, Typography} from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import LearnMoreModal from "@modules/components/landingPage/LearnMoreModal";

;
export default function ProductDescription(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>{
        console.log("Open")
        setOpen(!open)

    };

    return(
        <Paper sx={{ padding: "1rem", textAlign: "center", backgroundColor: "#fff", height: "100%" }} elevation={12}>
            <Box style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>{props.title}</Typography>
                <Icon>
                    {props.icon}
                </Icon>
                <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>{props.description}</Typography>
                <Button variant="contained" sx={{ backgroundColor: "#404040", color: "#fff" }} onClick={handleOpen}>Learn More</Button>
                <LearnMoreModal open={open}
                                onClose={()=> setOpen(!open)}/>
            </Box>

        </Paper>
    )
}


ProductDescription.propTypes={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    icon: PropTypes.element,
}