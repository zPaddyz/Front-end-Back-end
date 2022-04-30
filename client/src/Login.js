import Paper from '@mui/material/Paper';
import Plannerino from "./Plannerino.png"
import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
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
        marginTop: "50px"
    }
});

async function checkLogin(Email, Password) {
    var success = false;
    //var url = "/user/get/"+Email;
    var data;
    try {
        let response = await fetch("/user/get/"+Email+"/"+Password,{
            method: 'GET'
        })
        //let response = await fetch("http://130.225.170.83//user/get/"+Email+"/"+Password)
        // Check your response for error this may not be response.error
        if (response.error) {
            // Handle error
            alert(response.error)
        } else {
            //data = await response.json();
            data = response.status;
            
        }
    } catch (err) {
        console.log("failed");
        console.log(err);
        //failed attempts
        //alert(err)
    }
    console.log(data)
    /*if(data[0] === true){
        success = true
    }*/
    if(data == "400"){
        success = true
    }
        if (success) {
            alert("Login succesfuld");
            window.location.replace("/Home");
        } else {
            alert("Incorrect information");
        }
    
}

const Login = () => {
    var emailRef = React.useRef('');
    var passwordRef = React.useRef('');
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={24} className={classes.paperStyle}>
                <img src={Plannerino} alt={"bibo"} className={classes.imageStyle} />
                <Grid>
                    <Grid item xs={12}>
                        <TextField id="1" inputRef={ref => { emailRef = ref; }} label="Email" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="2" inputRef={ref => { passwordRef = ref; }} label="Password" type="password" variant="standard" style={{ marginTop: "10px" }} />
                    </Grid>
                    <Grid item xs={12}>
                            <Button onClick={() => checkLogin(document.getElementById("1").value,document.getElementById("2").value)} variant="contained" className={classes.buttonStyle}>Login</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/register" style={{textDecoration: "none"}}>
                            <Button variant="contained" className={classes.buttonStyle} style={{ marginTop: "10px" }}>Create an account</Button>
                        </Link>
                        
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default Login;