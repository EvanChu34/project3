import React, { Component } from 'react';
import Navbar from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";
import Map from '../Map/Map.js';
import { makeStyles } from "@material-ui/core/styles";
import { 
         TextField, 
         Box,
         Grid,
         Card,
         CardActionArea,
         CardActions,
         CardContent,
         CardMedia,
         Button,
         Typography
} from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: {
        background: "gray",
    },
    cardContainer: {
        maxWidth: "300",
        margin: "3rem",
        margin: "5rem auto",
        borderWidth: "3rem"    
    },
    cardContent: {
        background: "gray",
        text: "black",
    },

})

const Home = (props) => {

    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>

            <Navbar />

            <Box component="header">
                <Typography variant="h2">
                    MAIN PAGE
                </Typography>
            </Box>

            <Map
                    google={props.google}
                    center={{ lat:-73.945462, lng: 40.830182 }}
                    height='300px'
                    zoom={15}
                />


            <Footer />

        </Box>
    )
}

export default Home

