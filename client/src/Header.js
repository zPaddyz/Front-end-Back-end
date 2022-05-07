import {AppBar, Button, Divider, Grid, TextField, Toolbar, Typography} from "@mui/material";
import Plannerino from "./Plannerino.png";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import Valley from "./Valley.jpg";
import city from "./city.jpg";
import React from "react";

function logOut(){
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    window.location.replace("/")
}
function checkForToken(){
    if(document.cookie.search("token") === -1){
        alert("To much time has passed, please log back in.")
        window.location.replace("/")
    }
}

const Header = () => {
    checkForToken()
    return (
        <div /*style={{backgroundColor: "#F6EFDF"}}*/>
            <AppBar /*elevation={0}*/ position="static" style={{backgroundColor: "#F6EFDF"}}>
                <Toolbar>
                    <img onClick={() => window.location.replace("/home")} src={Plannerino} alt={"plannerino"} height={"50px"} width={"500px"}
                         style={{padding: "20px 0px", marginTop: ""}}/>
                    <Grid container direction={'row'} style={{marginLeft: "10px", display: "flex"}} spacing={5}>
                        <Grid item>
                            <Button onClick={() => window.location.replace("/home")} startIcon={<HomeIcon/>} label="Home" variant="standard" style={{color: "black", textTransform: 'capitalize', marginTop:"15px"}}>Home</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => window.location.replace("/about")} startIcon={<InfoIcon/>} label="About" variant="standard" style={{color: "black", textTransform: 'capitalize', marginTop:"15px"}}>About</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => window.location.replace("/profile")} startIcon={<PersonIcon/>} variant="standard" style={{color: "black", textTransform: 'capitalize',  marginTop:"15px"}}>Profile</Button>
                        </Grid>
                        <Grid item>
                            {
                                    (document.cookie.search("token") === 0)?
                                        <Button onClick={() => logOut()} startIcon={<LogoutIcon/>} variant="standard"
                                                style={{color: "black",backgroundColor:"#6BC4A2", textTransform: 'capitalize', marginLeft:"auto" , marginTop:"15px"}}>Log out</Button>:
                                    (document.cookie.search("token") === -1)?
                                        <Button onClick={() => window.location.replace("/")} startIcon={<LoginIcon/>} variant="standard"
                                                style={{color: "black",backgroundColor:"#6BC4A2", textTransform: 'capitalize', marginLeft:"auto" , marginTop:"15px"}}>Log in</Button>:
                                        <p>Something went wrong</p>
                            }
                        </Grid>
                    </Grid>
                    <Divider variant={"middle"} style={{backgroundColor:"#6BC4A2"}}/>
                </Toolbar>
                <Divider variant={"middle"} style={{backgroundColor:"#6BC4A2"}}/>
            </AppBar>
        </div>
    )
}

export default Header;