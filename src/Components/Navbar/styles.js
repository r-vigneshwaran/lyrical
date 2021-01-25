import { makeStyles } from "@material-ui/core";

export default makeStyles(() =>( {
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItem:'center'
    },
    logo: {
        color:'white',
        cursor: 'pointer',
        textDecoration: 'none !important',
        '&:hover': {
            color:'white'
        }
    }
}));