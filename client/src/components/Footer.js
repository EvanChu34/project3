import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, IconButton, Typography } from "@material-ui/core";


const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNAvigation width="auto" style={{ background: "#291C8F"}}>
            <Typography variant="h3">
                 This is the Footer Element
            </Typography>
        </BottomNAvigation>
    )
}

export default Footer
