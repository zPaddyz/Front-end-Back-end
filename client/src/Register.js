import Paper from '@mui/material/Paper';
import Plannerino from "./Plannerino.png"
import {Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
//import { Link } from 'react-router-dom';
import React from "react";
import { textAlign } from '@mui/system';


const useStyles = makeStyles({
    paperStyle: {
        margin: "80px auto",
        backgroundColor: "#F6EFDF",
        width: '400px',
        height: "500px",
        borderRadius: "30px",
        flexDirection: "column",
        textAlign: "center"
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

async function saveData(Firstname, LastName, Email, Password, ConfirmPassword) {
    var failedAttempt = false;
    //TODO: Ryk til backend
    // email regex = https://www.w3resource.com/javascript/form/email-validation.php
    if (Firstname !== "" && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) && Password !== "" && ConfirmPassword !== "") {
        if (Password === ConfirmPassword) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer my-token'  
                },
                body: JSON.stringify({
                    "firstName": Firstname,
                    "lastName": LastName,
                    "email": Email,
                    "password": Password
                })
            }

            await fetch('/user', requestOptions)
            .then( (response) => { 
                console.log(response)
                if (response.status === 204) {
                    alert("User creation succesfuld! \n Please log in.");
                    window.location.replace("/");
                } else {
                    failedAttempt = true;
                }
                //do something awesome that makes the world a better place
             })  

           
        }
    } else {
        failedAttempt = true;
    }
        if(failedAttempt === true) {
            alert("User not created! Please make sure all fields are filled out correctly.");
        }

}
const Register = () => {
    const classes = useStyles();
    return (

        <div>
            <Paper elevation={24} className={classes.paperStyle}>
                <img src={Plannerino} alt={"bibo"} className={classes.imageStyle} />
                <Grid>
                    <Grid item xs={12}>
                        <TextField id="1" label="Username" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="2" label="E-mail" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="3" label="Password" variant="standard" type="password" style={{ marginTop: "10px" }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="4" label="Confirm password" variant="standard" type="password" style={{ marginTop: "10px" }} />
                    </Grid>
                    <Grid item xs={12}>

                        <Button onClick={() => {
                            saveData(document.getElementById("1").value, document.getElementById("1").value, document.getElementById("2").value, document.getElementById("3").value, document.getElementById("4").value,
                            /*firstNameRef.value, firstNameRef.value, emailRef.value, passwordRef.value, confirmPasswordRef.value*/)
                        }
                        } variant="contained" className={classes.buttonStyle}>Get planning</Button>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default Register;