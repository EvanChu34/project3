import React, { Component } from 'react';
import Navbar from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";
import MapContainer from '../Map/Map.js';
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
        background: "gold",
    },
    cardContainer: {
        width: "80%",
        maxWidth: "345",
        margin: "3rem",
        margin: "5rem auto",
        borderWidth: "10px",
        borderColor: "black",
        paddingTop: "20px",
        paddingBottom: "20px", 
        paddingLeft: "50px",
        paddingRight: "50px",  
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

            <Card className={classes.cardContainer}>

            <MapContainer/>

            </Card>

            

            <Footer />

        </Box>
    )
}

export default Home

