import Paper from '@mui/material/Paper';
import Plannerino from "./Plannerino.png"
import {Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
//import { Link } from 'react-router-dom';
import React from "react";


const useStyles = makeStyles({
    paperStyle: {
        margin: "80px auto",
        backgroundColor: "#F6EFDF",
        width: '400px',
        height: "500px",
        borderRadius: "30px",
        flexDirection: "column"
    },
    imageStyle: {
        height: "40px",
        width: "350px",
        padding: "20px 30px",
        marginTop: "100px"
    },
    buttonStyle: {
        backgroundColor: "#6BC4A2",
        "&:hover": {
            backgroundColor: "#4ca183"
        },
        borderRadius: "20px",
        width: "190px",
        marginTop: "40px"
    }
});

function saveData(Firstname, LastName, Email, Password, ConfirmPassword) {
    var success = false;
    // email regex = https://www.w3resource.com/javascript/form/email-validation.php
    if (Firstname !== "" && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) && Password !== "" && ConfirmPassword !== "") {
        if (Password === ConfirmPassword) {
            // POST request using fetch with set headers
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer my-token',
                    'My-Custom-Header': 'foobar'
                },
                body: JSON.stringify({
                    firstName: Firstname,
                    lastName: LastName,
                    email: Email,
                    password: Password,
                })
            };

            fetch('http://130.225.170.83/user', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({ postId: data.id }))
            success = true
        }
    } else success = false;

    if (success) {
        alert("User created");
        window.location.replace("/");

    } else {
        alert("User not created! Please make sure all fields are filled.");
    }
}

const Register = () => {
    var firstNameRef = React.useRef('');
    var lastNameRef = React.useRef('');
    var emailRef = React.useRef('');
    var passwordRef = React.useRef('');
    var confirmPasswordRef = React.useRef('');

    const classes = useStyles();
    return (

        <div>
            <Paper elevation={24} className={classes.paperStyle}>
                <img src={Plannerino} alt={"bibo"} className={classes.imageStyle} />
                <Grid>
                    <Grid item xs={12}>
                        <TextField inputRef={ref => { firstNameRef = ref; }} label="Username" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField inputRef={ref => { emailRef = ref; }} label="E-mail" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField inputRef={ref => { passwordRef = ref; }} label="Password" variant="standard" type="password" style={{ marginTop: "10px" }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField inputRef={ref => { confirmPasswordRef = ref; }} label="Confirm password" variant="standard" type="password" style={{ marginTop: "10px" }} />
                    </Grid>
                    <Grid item xs={12}>

                        <Button onClick={() => saveData(firstNameRef.value, firstNameRef.value, emailRef.value, passwordRef.value, confirmPasswordRef.value)} variant="contained" className={classes.buttonStyle}>Get planning</Button>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default Register;