import Link from "next/link";
import {PhotoCamera} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import FirstPageIcon from '@mui/icons-material/FirstPage';
export default function GoBackButton(props){
   const handleClick = () =>{

       window.location = props.link
   }
    return(
        <IconButton color="primary" aria-label="Go Back" component="label" >
            <Link href={props.link} style={{textDecoration: "none", color : "black"}}>
                <FirstPageIcon style={{fontSize:"50px"}}/>

            </Link>

        </IconButton>
    )
}
GoBackButton.propTypes={
    link: PropTypes.string
}