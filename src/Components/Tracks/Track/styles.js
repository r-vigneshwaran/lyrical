import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {

        minWidth: 400,
        height: '235px',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            minWidth: 150,
            height: '200px',
        },
        [theme.breakpoints.down('md')]: {
            minWidth: 120
        },
        [theme.breakpoints.down('lg')]: {
            minWidth: 120
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        marginBottom: 10,
        [theme.breakpoints.down('sm')]:{
            fontSize:10
        }
    },
    center: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 16
        }
    },
    pos: {
        marginBottom: 12,
    },
    action: {
        position: 'absolute',
        bottom: 0,
    },
    view: {
        color: 'black',
        cursor: 'pointer',
        textDecoration: 'none !important',

    }
}));