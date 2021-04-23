import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, IconButton, Typography, Avatar, Icon } from "@material-ui/core";
import Logo from "../../utils/img/findit.png";



const useStyles = makeStyles({
    footer: {
        background: "black",
    },
    logo: {
        "& .MuiAvatar-root": {
            minWidth: 0,
            maxWidth: 250,
         },
    },
});

const Footer = () => {
    const classes = makeStyles();

    return (
        <BottomNavigation width="auto" style={{ background: "white"}}>
          <Avatar className={classes.logo} src={Logo} alt="FindIt" />
        </BottomNavigation>
    )
}

export default Footer
