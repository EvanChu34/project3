import React from 'react';
import Navbar from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { 
    Typography,
    Box
 } from '@material-ui/core';

 import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles();

const Contact = () => {

    const classes = useStyles();

    return (
        <>
        <Navbar />
        <Box component="div">
          <Typography variant="h2">
             Contact
          </Typography>


          
        </Box>
        <Footer />
        </>
    )
}

export default Contact;