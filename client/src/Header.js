import {AppBar, Button, Divider, Grid, TextField, Toolbar, Typography} from "@mui/material";
import Plannerino from "./Plannerino.png";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    return (
        <div style={{backgroundColor: "#F6EFDF"}}>
            <AppBar elevation={0} position="static" style={{backgroundColor: "#F6EFDF"}}>
                <Toolbar>
                    <img src={Plannerino} alt={"plannerino"} height={"50px"} width={"500px"}
                         style={{padding: "20px 0px", marginTop: ""}}/>
                    <Grid container direction={'row'} style={{marginLeft: "10px", display: "flex"}} spacing={5}>
                        <Grid item>
                            <Button startIcon={<HomeIcon/>} label="Home" variant="standard" style={{color: "black", textTransform: 'capitalize', marginTop:"15px"}}>Home</Button>
                        </Grid>
                        <Grid item>
                            <Button startIcon={<InfoIcon/>} label="About" variant="standard" style={{color: "black", textTransform: 'capitalize', marginTop:"15px"}}>About</Button>
                        </Grid>
                        <Grid item>
                            <Button startIcon={<LogoutIcon/>} variant="standard" style={{color: "black",backgroundColor:"#6BC4A2", textTransform: 'capitalize', marginLeft:"auto" , marginTop:"15px"}}>Log out</Button>
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