import React, { Component } from 'react';
import Navbar from "../Nav/Nav.js";
import LostItems from "../LostItems/LostItems.js";
import Footer from "../Footer/Footer.js";
import MapContainer from '../Map/Map.js';
import Image from "../../utils/img/bgOption3.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import {  Box,
          Card, 
          CardActionArea,
          CardContent, 
          Typography, 
        } from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: {
        backgroundImage: `url(${Image})`,
    
    },
    cardContainer: {
        //background: "#1976d2",
        background: "white",
        width: "90%",
        maxWidth: "345",
        marginLeft: "4rem",
        marginRight: "2rem",
        borderWidth: "10px",
        borderColor: "black",
        paddingTop: "0px",
        paddingBottom: "20px", 
        paddingLeft: "0px",
        paddingRight: "0px", 
        marginBottom: "25px",
        align: "center", 
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

            <LostItems />

            <Card className={classes.cardContainer}>
              <CardActionArea style={{ background: "#eaba00" }}>
                <Typography variant="h3" style={{textAlign: "center", color: "white" }}>
                Locate Your Item!
                </Typography>
              </CardActionArea>
              <CardContent style={{ background: "white" }}>
                <MapContainer/>
              </CardContent>
            </Card>

            <Footer />

        </Box>
    )
}

export default Home

