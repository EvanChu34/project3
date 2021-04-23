import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, IconButton, Typography, Avatar } from "@material-ui/core";
import Logo from "../../utils/img/findit.png";


const useStyles = makeStyles({
    footer: {
        background: "#291C8F",
    },
    logo: {
        "& .MuiBottomNavigstion-root": {
            minWidth: 0,
            maxWidth: 250,
         },
    },
});

const Footer = () => {
    const classes = makeStyles();

    return (
        <BottomNavigation width="auto" style={{ background: "#291C8F"}}>
             <Avatar className={classes.logo} src={Logo} alt="FindIt" />
        </BottomNavigation>
    )
}

export default Footer
