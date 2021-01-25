import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    textfield: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    center: {
        position: 'relative',
        margin: '30px',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
    },
    card: {
        width: '50rem',
        borderRadius: '3px',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        },
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Oswald  sans-serif'
    },
    link: {
        textDecoration:'none'
    },
    wrapper: {
        maxWidth: '450px',
        margin:'15px auto'
    },
    searchInput: {
        position:'relative',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: '5px',
        // height:'50px',
        boxShadow:'0px 1px 5px 3px rgba(0,0,0,0.12)',
    },
    inputBox: {
        height: '55px',
        width: '100%',
        outline: 'none',
        border: 'none',
        borderRadius: '0px 60px 0px 20px',
        padding:'0px 60px 0 20px',
        fontSize: 18,
        boxShadow:'0px 1px 5px rgba(0,0,0,0.1)'
    },
    icon: {
        height: '55px',
        width: '55px',
        lineHeight: '55px',
        position: 'absolute',
        top: 0,
        right: 0,
        textAlign: 'center',
        fontSize: '20px',
        color: '#644bff',
        cursor:'pointer',
    },
    autoComBox: {
        // padding: '10px 8px',
        // maxHeight: '280px',
        overflow:'hidden',
        overflowY: 'scroll',
        // zIndex:100,
        cursor:'pointer'
    },
    li: {
        listStyle: 'none',
        padding: '8px 12px',
        width: '100%',
        cursor: 'default',
        borderRadius: '3px',
        zIndex:100,
        '&:hover': {
            backgroundColor:'#efefef'
        }
    }
}));