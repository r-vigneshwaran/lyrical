import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    grid: {
        maxWidth: '50%',
        maxHeight: 400,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 400
        },
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Oswald  sans-serif'
    },
    mainContainer: {
        position: 'relative',
    },
    
    CircularProgress: {
        position: 'relative',
        margin: '30px',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
    },
    
}));