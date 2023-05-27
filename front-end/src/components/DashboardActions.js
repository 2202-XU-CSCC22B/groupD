import * as React from "react";
import Title from "@modules/components/dashboard/Title";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {styled} from "@mui/material/styles";
import {ButtonBase} from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 450,
    width: 450,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: '100%',
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#03a9f4",
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: "#ed6c02",
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));


export default function DashboardActions(props){
    return(
        <React.Fragment>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>

                    <ImageButton
                        focusRipple
                        key={props.title}
                        style={{
                            width: props.width,
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${props.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>

                            <Typography
                                component="span"
                                variant="h6"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                <Link href={props.link}  style={{textDecoration: "none", color: "inherit"}}>
                                    {props.icon} {props.title}
                                </Link>

                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>

            </Box>
        </React.Fragment>
    )
}

DashboardActions.propTypes = {
    title: PropTypes.string,
    width: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string
};