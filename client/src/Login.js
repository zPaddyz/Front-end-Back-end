import Paper from '@mui/material/Paper';
import Plannerino from "./Plannerino.png"
import { Button, Grid, TextField } from "@mui/material";
import "./Login.css";
//import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import React from "react";

/*const useStyles = makeStyles({
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
        marginTop: "50px"
    }
});*/

async function checkLogin(Email, Password) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                //'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({
                "email": Email,
                "password": Password
            })
        }

        
        await fetch('/users/get', requestOptions)
        .then( (response) => { 
            console.log(response)
            if (response.status === 204) {
                alert("Login succesfuld");
                window.location.replace("/Home");
            } else {
                alert("Incorrect information");
            }
            //do something awesome that makes the world a better place
         })   

    } catch (err) {
        console.log("failed");
        console.log(err);
        //failed attempts
        //alert(err)
    }
}

const Login = () => {
    //const classes = useStyles();
    return (
        <div>
            <Paper elevation={24} className="paperStyle" style={{backgroundColor: "#F6EFDF", borderRadius: "30px"}}>
                <img src={Plannerino} alt={"bibo"} className="imageStyle" />
                <Grid>
                    <Grid item xs={12}>
                        <TextField id="1" label="Email" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="2" label="Password" type="password" variant="standard" style={{ marginTop: "10px" }} />
                    </Grid>
                    <Grid item xs={12}>
                            <Button onClick={() => checkLogin(document.getElementById("1").value,document.getElementById("2").value)} 
                            variant="contained" className="buttonStyle" style={{backgroundColor: "#6BC4A2", marginTop: "25px", borderRadius: "30px" }}>Login</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/register" style={{textDecoration: "none"}}>
                            <Button variant="contained" className="buttonStyle" style={{backgroundColor: "#6BC4A2", marginTop: "20px", borderRadius: "30px" }}>Create an account</Button>
                        </Link>
                        
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default Login;