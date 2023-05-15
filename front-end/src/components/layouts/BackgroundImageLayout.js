import {Container} from "@mui/material";
import {backGroundImage} from "@modules/utils/config";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const BackgroundImageLayout = ({children}) => {
    const classes = useStyles();

    return (
        <div style={{minHeight: '100vh',
            backgroundImage: backGroundImage.url,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Container maxWidth="sm">
                {children}
            </Container>
        </div>
    );
};

export default BackgroundImageLayout;