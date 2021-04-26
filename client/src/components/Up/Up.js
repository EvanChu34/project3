import React from 'react';
import Navbar from '../Nav/Nav.js';
import SignUp from '../../pages/SignUp.js';
import { Box,
         Card,
         } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../utils/img/bgPattern1.jpg";


const useStyles = makeStyles({
  mainContainer: {
    backgroundImage: `url(${Image})`,
    height: "100%",
  },
  card: {
    top: "75%",
    left: "50%",
    width: "50%",
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
    
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Card className={classes.card}>
      <SignUp />
      </Card>
    </Box> 
  
  
  )
}

export default Up
