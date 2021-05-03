import React from 'react';
import Navbar from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { Container, Row } from '../Grid/Grid.js';
import { 
    Typography,
    Box,
    Card,
    CardContent,
    CardActionArea,
 } from '@material-ui/core';
import Jumbotron from '../Jumbotron/Jumbotron.js';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const AlfaFont = createMuiTheme({
    typography: {
      fontFamily: [
        'Alfa Slab One',
        'cursive',
      ].join(','),
    },});

const useStyles = makeStyles({
    card: {
      background: "#bdab00",
      marginLeft: "50px",
      marginRight: "50px",
      marginTop: "500px",
      paddingTop: "20px",
      paddingBottom: "20px", 
      paddingLeft: "50px",
      paddingRight: "50px", 
  },
  });


const About = () => {

    const classes = makeStyles();

    return(

        <Box component="div" style={{ height: "100%", background: "#bdab00" }}>
        <Navbar />

        { /* 
          <Box component="div">
            <Typography variant="h2">
             About us
            </Typography>
          </Box>
        */ }

        <Container>
        <Row>

            <Card style={{ 
                           //background: "#bdab00", 
                           marginLeft: "50px",
                           marginRight: "50px",
                           marginTop: "50px",
                           marginBottom: "50px",
                           paddingTop: "20px",
                           paddingBottom: "20px", 
                           paddingLeft: "50px",
                           paddingRight: "50px",  
                           }}>
                           
            <CardActionArea>
                <Typography variant="h1" style={{ textAlign: "center", fontFamily: 'Alfa Slab One', color: "#3e70e5", }}>
                    About Us
                </Typography>
            </CardActionArea>
            <CardContent>
                <Typography variant="h5">
                { /* 
                <Jumbotron>
                <h1></h1>
                <h4>
                */}
                Find It is the easiest way to look for your lost, stolen, or missing stuff. 
                No matter how it happened, the result is always the same, you’ve lost something and you don’t know where to start looking.
                Your first stop should be Find it, the most promising and easiest way to find your stuff.
                Available 24/7, no waiting time, never too busy, and always up-to-date.
                With Find It, you’ll find your lost item in no time. Search our lost and found database for free or add a found item.
                Our goal is to reunite owners with their missing property.
                Find It offers an intuitive platform that is free of charge for 
                everyday people and enables everyone to publish found items fast and uncomplicated as well as search for them.
                { /* 
                </h4>
                </Jumbotron>
                */}
                </Typography>
                </CardContent>
            </Card>

        </Row>
        </Container>

        <Footer />

        </Box>
    )
}


export default About;