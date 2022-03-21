import {AppBar, Button, Link, makeStyles, Toolbar, Typography} from "@mui/material";
import Plannerino from "./img/Plannerino.png";


const Home = () =>{
    return(
        <div style={{backgroundColor: ""}}>
            <AppBar position="static" style={{backgroundColor: "#F6EFDF"}}>
                <Toolbar>
                    <img src={Plannerino} alt={"bibo"} height={"40px"} width={"350px"} style={{padding: "20px 0px", marginTop: ""}}/>
                    <div style={{backgroundColor: "#D5A13E", marginLeft: "1000px", padding: "", borderRadius: "5px"}}>
                        <Button style={{color: "white"}}>login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Home