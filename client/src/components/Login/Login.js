import React, { useState } from "react";
import Form from " ";
import Button from "";

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
        


    )

}






