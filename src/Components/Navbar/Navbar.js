import React from 'react'
import useStyles from "./styles";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { Link } from "react-router-dom";


const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
            <LibraryMusicIcon fontSize="large" color="secondary"/>
            &nbsp;
            <h1><Link className={classes.logo} to="/">Lyrical</Link></h1>
        </nav>
    )
}

export default Navbar
