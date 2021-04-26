import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, Avatar } from "@material-ui/core";
import Logo from "../../utils/img/findit.png";
//import FindItIcon from "../../utils/img/finditlogo3.png";



const useStyles = makeStyles({
    logo: {
        "& .MuiAvatar-root": {
            minWidth: 0,
            maxWidth: 250,
         },
    },
//    avatar: {
//        ".MuiAvatar-img": {
//        variant: "square",
//        sizes: "100%",
//    },
//    },
    
});

const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNavigation width="auto" style={{ background: "white"}}>
          <Avatar className={classes.logo} src={Logo} alt="FindIt" />
          {/*<Avatar variant="square" src={FindItIcon} alt="FindItIcon" /> */}
        </BottomNavigation>
      
    )
}

export default Footer
