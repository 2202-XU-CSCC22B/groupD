import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import PropTypes from 'prop-types';
import Link from "next/link";
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function MyCustomBreadCrumbs(props) {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                {props.breadcrumbs.map((crumbs, index) => (
                    <Link underline="hover" color="inherit" href={crumbs.link}>
                        {crumbs.name}
                    </Link>
                ))}

                <Typography color="text.primary" variant={"h3"}>{props.name}</Typography>
            </Breadcrumbs>
        </div>
    );
}
MyCustomBreadCrumbs.propTypes={
    breadcrumbs: PropTypes.object,
    name: PropTypes.string

}
