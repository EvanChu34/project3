import React from 'react';
import Navbar from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import SignUp from '../../pages/SignUp.js';
import SignIn from "../../pages/SignIn.js";
import { Box,
         Card,
         } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../utils/img/bgPattern4.jpeg";


const useStyles = makeStyles({
  mainContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center center",
	  backgroundSize: "cover",
	  height: "1000px",
    //marginBottom: "0px",
  },
  card: {
    top: "75%",
    left: "50%",
    width: "50%",
    marginBottom: "50px",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    paddingTop: "20px",
    paddingBottom: "20px", 
    paddingLeft: "20px",
    paddingRight: "20px" 
},
})



const Up = () => {

  const classes = useStyles();
  return (
    <>
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Card className={classes.card}>
      <SignUp />
      </Card>
    </Box> 
    <Footer />
    </>
    
  
  
  )
}

export default Up
