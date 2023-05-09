import React from 'react';
import {makeStyles, withStyles} from "@mui/styles";
import {Container, Grid} from "@mui/material";
import {Typography} from "@mui/material";
import {styles} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";
const useStyles = makeStyles((theme) => ({
    root: (props) => ({
        backgroundColor: props.backgroundColor,
        color: theme.color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    }),

    container: (props) => ({
        marginTop: 2,
        marginBottom: 2,
        padding: 2,
        backgroundColor: props.backgroundColor,

        boxShadow: 2,
    }),
}));




function Page({ classes, title, children }) {
    return (
        <div className={classes.root}>
            <Container maxWidth="sm" className={classes.container}>
                {title && (
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        {title}
                    </Typography>
                )}
                {children}
            </Container>
        </div>
    );
}

export default withStyles(styles)(Page);