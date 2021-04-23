import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import { 
         Typography,
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

const Home = () => {

    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>

            <Navbar />

            <Box component="header">
                <Typography variant="h2">
                    MAIN PAGE
                </Typography>
            </Box>


            <Footer />

        </Box>
    )
}

export default Home












/*
import React, { Component } from 'react';
import Map from '../Map/Map.js';

class Home extends Component {

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    center={{ lat:-73.945462, lng: 40.830182 }}
                    height='300px'
                    zoom={15}
                />
            </div>
        );
    }
}

export default Home;
*/