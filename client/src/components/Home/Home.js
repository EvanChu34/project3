import React, { Component } from 'react';
import Navbar from "../Nav/Nav.js";
import LostItems from "../LostItems/LostItems.js";
import Footer from "../Footer/Footer.js";
import MapContainer from '../Map/Map.js';
import Image from "../../utils/img/bgOption3.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import {  Box, Card } from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: {
        backgroundImage: `url(${Image})`,
    
    },
    cardContainer: {
        //background: "#1976d2",
        background: "black",
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
});

const Home = (props) => {

    const classes = useStyles();

    return (
        <Box component="main" className={classes.mainContainer}>

            <Navbar />

            <Card className={classes.cardContainer}>

            <MapContainer/>

            </Card>

            <LostItems />

            <Footer />

        </Box>
    )
}

export default Home

