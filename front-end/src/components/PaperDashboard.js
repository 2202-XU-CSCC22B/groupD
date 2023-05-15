import {Paper, Tooltip} from "@mui/material";
import List from "@mui/material/List";
import {logoutButton} from "@modules/utils/config";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
export default function PaperDashboard(props){
    const { color, tooltip, icon, value, name } = props;

    return(
        <Tooltip title={tooltip}>
        <Paper style={{width:'25%',borderRadius: "25px", backgroundColor: color, padding: "1rem"}} variant={"outlined"} square >
            <List>

                    <ListItem key={name} disablePadding sx={{ display: 'block' }}>

                            <ListItemIcon >
                                {icon}
                            </ListItemIcon>
                        <ListItemText >
                            <Typography component="p" variant="h5">
                                {value}
                            </Typography>

                        </ListItemText>
                        <ListItemText>
                            <Typography color="text.secondary" sx={{ flex: 1 }}> {name}</Typography>
                        </ListItemText>

                    </ListItem>

            </List>
        </Paper>
        </Tooltip>
    )
}

PaperDashboard.propTypes={
    color : PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}