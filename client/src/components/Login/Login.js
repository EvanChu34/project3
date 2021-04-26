import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Nav/Nav.js";
import Background from "./Login.css";
import { Form } from 'react-bootstrap';
import { Card, CardActionArea, Button, Box, Typography } from "@material-ui/core";


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
       { /*<Box component="div" style={{ background: "white", height: "100vh"}}> */ }
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






