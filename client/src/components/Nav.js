import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';
import Logo from "./findit?.png";

import { 
    AppBar,  
    Toolbar, 
    ListItem, 
    IconButton,
    ListItemIcon, 
    ListItemText,
    Avatar, 
    Divider, 
    List, 
    Typography, 
    Box 
} from '@material-ui/core';

import { 
    Explore,  
    Home, 
    LockOpen  
} from '@material-ui/icons';

//import avatar from "../Images/avatar.png";
//line 80 => DELETE TYPOGRAPHY/REPLACE WITH <Avatar className={classes.avatar} src={avatar} alt="reactAvatar" /> 


//STYLING
const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
      width: 250,
      background: "#511",
      height: "30rem"
  },
  logo: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
},
  listItem: {
    color: "tan",
  }
}));

const menuItems = [
  {
      listIcon: <LockOpen/>,
      listText: "Login",
      listPath: "/"
  },
  {
      listIcon: <Home/>,
      listText: "Home",
      listPath: "/Home"
  },
  //{
  //    listIcon: <Filler/>,
  //    listText: "Filler",
  //    listPath: "Filler"
  //},
  //{
  //    listIcon: <Filler/>,
  //    listText: "Filler",
  //    listPath: "Filler"
  //},
]

const Navbar = () => {
  const [state, setState] = useState ({
    right: false,
})

const toggleSlider = ((slider, open) => () => {
  setState({ ...state, [slider]: open });
});
const classes = useStyles();

const sideList = slider => (


    <Box       
      className={classes.menuSliderContainer} 
      component="div"
      onClick={toggleSlider(slider, false)}>
    {/* <Avatar className={classes.logo} src={findit} alt="FindIt" />   */}
    <Divider />
    <List>
         {menuItems.map((lsItem, key)=>(
      <ListItem button key={key} component={Link} to={lsItem.listPath}>
        <ListItemIcon className={classes.listItem}>
          {lsItem.listIcon}
        </ListItemIcon>
    <ListItemText 
          className={classes.listItem}
          // primary={listItem.listText}
          />
    </ListItem>
      ))}
    </List>
    </Box>
        )

  return (
    <>
      <Box component="nav">
          <AppBar position="static" style={{ background: "#222" }}>
             <Toolbar>
             <IconButton onClick={toggleSlider("right", true)}>
                 <Explore style={{ color: "red" }}/>
             </IconButton>
                <Typography variant="h5" style={{ color: "tan" }}>
                FIND IT
                </Typography>
                <MobilRightMenuSlider 
                   anchor="right" 
                   open={state.right}
                   onClose={toggleSlider("right", false)}>
                    {sideList("right")}
                    <Footer />
                </MobilRightMenuSlider>
            </Toolbar>
           </AppBar>
        </Box>
        </>
    )
};
export default Navbar;




























