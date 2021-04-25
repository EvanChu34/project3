import React from 'react';
import Navbar from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Grid, Box, Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tan",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
            borderColor: "tan",
        },
        "&:hover fieldset": {
            borderColor: "tan",
        },
        "& .Mui-focused field": {
            borderColor: "tan",
        },
        },
    },
})(TextField);

const useStyles = makeStyles(theme=>({
    form: {
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "#ffd600",
        borderColor: "#ffd600",
    },
}));

const Contact = () => {

    const classes = useStyles();   
    
        return (
            <>
            <Box component="div" style={{ background: "white", height: "100vh"}}>
            <Navbar />
                <Grid container justify="center">
                    <Box component="form" className={classes.form}>    
                <Typography variant="h5" style={{color: "#ffd600", textAlign: "center", textTransform: "uppercase"}}>
                   Contact Us:
                </Typography>
                <InputField
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{style:{ color: "white" } }} 
                margin="dense"
                size="medium"
                />
                <br />
                 <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{style:{ color: "white"}}} 
                margin="dense"
                size="medium"
                />
                <br />
                 <InputField
                fullWidth={true}
                label="Company Name"
                variant="outlined"
                inputProps={{style:{ color: "white"}}} 
                margin="dense"
                size="medium"
                />
                <br />
                <Button 
                className={classes.button} 
                variant="outlined" 
                fullWidth={true} 
                endIcon={<SendIcon />}
                >
                    contact us
                </Button>
                </Box>
                </Grid>
            </Box>
            <Footer />
            </>
            )   
    };


export default Contact;