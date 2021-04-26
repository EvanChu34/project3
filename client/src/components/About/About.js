import React from 'react';
import Navbar from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { Container } from '../Grid/Grid.js';
import Jumbotron from '../Jumbotron/Jumbotron.js';


const About = () => {
    return(
        <>
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
        </>
    )
}


export default About;