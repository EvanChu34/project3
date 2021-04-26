import React from 'react';
import Navbar from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { Container, Row } from '../Grid/Grid.js';
import { 
    Typography,
    Box
 } from '@material-ui/core';
import Jumbotron from '../Jumbotron/Jumbotron.js';


const About = () => {
    return(
        <Box component="div" style={{ height: "100%" }}>
        <Navbar />
        <Box component="div">
          <Typography variant="h2">
             About
          </Typography>
        </Box>
        <Container>
        <Row>
            <Jumbotron>
                <h1>About us</h1>
            </Jumbotron>
        </Row>

        </Container>

        <Footer />
        </Box>
    )
}


export default About;