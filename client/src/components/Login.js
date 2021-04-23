import React, { useState } from "react";
// import Form from "./Form/Form.js";
import { Form } from 'react-bootstrap';
import Navbar from './Nav/Nav.js';
// import Button from "./";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }
    
    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className="Login">
        <Navbar />
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
          <button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </button>
        </Form>
      </div>
    )
}






