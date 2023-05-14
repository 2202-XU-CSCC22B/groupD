import React from 'react';
import {Paper, Typography} from "@mui/material";


function FormPaperComponent(props) {
    const styles = {
        root: {
            padding: '16px',
            '@media (max-width: 600px)': {
                padding: '8px',
            },
        },
        title: {
            marginBottom: '8px',
        },
    };

    return (
        <Paper style={styles.root}>
            <Typography variant="h5" style={styles.title}>
                {props.title}
            </Typography>
            {props.children}
        </Paper>
    );
}

export default FormPaperComponent;