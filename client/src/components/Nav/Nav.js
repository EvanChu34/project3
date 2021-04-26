import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import Footer from '../Footer/Footer';
import Logo from "../../utils/img/findit.png";
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
    //ContactPhoneIcon, 
} from '@material-ui/icons';

//import PageviewIcon from '@material-ui/icons/Pageview';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import InfoIcon from '@material-ui/icons/Info';




//STYLING
const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
      width: 250,
      background: "white",
      height: "100%",
  },
  logo: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
},
  listItem: {
    color: "#fbc02d",
  },
  explore: {
    color: "#fbc02d",
    "&:hover": {
      color: "light gray",
    },
  },
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
  {
      listIcon: <InfoIcon/>,
      listText: "About Us",
      listPath: "/AboutUs"
  },
  {
      listIcon: <ContactPhoneIcon/>,
      listText: "Contact Us",
      listPath: "/Contact",
  },
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
    onClick={toggleSlider(slider, false)}
    >
    <Avatar className={classes.logo} src={Logo} alt="FindIt" />
    <Divider />
    
    <List>
         {menuItems.map((lsItem, key)=>(
      <ListItem button key={key} component={Link} to={lsItem.listPath}>
        <ListItemIcon className={classes.listItem}>
          {lsItem.listIcon}
        </ListItemIcon>
    <ListItemText 
          className={classes.listItem}
          primary={lsItem.listText}
          />
    </ListItem>
      ))}
    </List>
    </Box>
        )

  return (
    <>
      <Box component="nav">
          <AppBar position="static" style={{ background: "White" }}>
             <Toolbar>
             <IconButton onClick={toggleSlider("right", true)}>
                  <Explore className={classes.explore}/>  
                 { /*<Explore style={{color: "white"}} /> */ }
             </IconButton>
                <Typography variant="h3" style={{ color: "#fbc02d" }}>
                FIND IT
                </Typography>
                <Avatar className={classes.logo} src={Logo} alt="FindIt" />
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




























