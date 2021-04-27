import React from 'react';
import { Avatar,
         Button,
         CssBaseline,
         TextField,
         FormControlLabel,
         Checkbox,
         Link,
         Grid,
         Box,
         Card,
         Typography
        } from '@material-ui/core';
import Navbar from "../Nav/Nav.js";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../utils/img/bgPattern1.jpg'; 
import SignUp from '../../pages/SignUp.js';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Finders Keepers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//const useStyles = makeStyles({
  

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center center",
	  backgroundSize: "cover",
	  height: "900px",
    //marginBottom: "0px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  card: {
      top: "45%",
      left: "50%",
      width: "50%",
      textAlign: "center",
      borderColor: "black",
      borderWidth: "5px",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      paddingTop: "20px",
      paddingBottom: "20px", 
      paddingLeft: "20px",
      paddingRight: "20px", 
  },
//});
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    //<Box component="body" >
    <Box component="div" maxWidth="xs" className={classes.mainContainer}>
    <Navbar />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Card className={classes.card}>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link> 
                <a 
                href={"../Up/Up.js"} 
                variant="body2">
                {"Don't have an account? Sign Up!"}
                </a>
              </Link>
            </Grid>
          </Grid>
        </form>
        </Card>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Box>
   // </Box>
    
  );
}

/*

import React from 'react';
//import Navbar from '../Nav/Nav.js';
//import Footer from '../Footer/Footer.js';
import SignIn from '../../pages/SignIn.js';
import { Box, Card } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../utils/img/bgPattern1.jpg";

const useStyles = makeStyles({
    mainContainer: {
      //background: "gray",
      backgroundImage: `url(${Image})`,
        //height: "100%",
    },
    card: {
      marginTop: "25%",
      marginBottom: "25%",
      left: "50%",
      width: "50%",
      textAlign: "center",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      paddingTop: "20px",
      paddingBottom: "20px", 
      paddingLeft: "20px",
      paddingRight: "20px", 
  },
  })

const Login = (props) => {

    const classes = useStyles();

    return (
    <Box component="body" className={classes.mainContainer}>


        <Card className={classes.card}>

            <SignIn />

        </Card>


    </Box> 
    )
}

export default Login

*/

















/*
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Nav/Nav.js";
import Background from "./Login.css";
import { Form } from 'react-bootstrap';
import { Card, CardActionArea, Button, Box, Typography } from "@material-ui/core";
*/

/*
const useStyles = makeStyles(theme=>({
form: {
    top: "45%",
    left: "50%",
    width: "50%",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    paddingTop: "20px",
    paddingBottom: "20px", 
    paddingLeft: "20px",
    paddingRight: "20px",  
},
mainContainer: {
background: "white",
height: "100%",
},
}));
*/

/*
const useStyles = makeStyles ({
form: {
  top: "45%",
  left: "50%",
  width: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  paddingTop: "20px",
  paddingBottom: "20px", 
  paddingLeft: "20px",
  paddingRight: "20px", 
  borderColor: "Black",
  border: "10px", 
},
})
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm(){
      return email.length > 0 && password.length > 0;
  }
  
  function handleSubmit(event){
      event.preventDefault();
  }
  const classes = useStyles(); 
  return (
    <>
     <Box>
    <Navbar />
    <Card component="form" className={classes.form}> 
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" color="primary" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </Card>
    </Box>
    </>
  )
}
*/

