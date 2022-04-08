import {AppBar, Button, makeStyles, Toolbar, Typography} from "@mui/material";
import Plannerino from "./Plannerino.png";
import { Link } from 'react-router-dom';


const Home = () =>{
    return(
        <div style={{backgroundColor: ""}}>
            <AppBar position="static" style={{backgroundColor: "#F6EFDF"}}>
                <Toolbar>
                    <img src={Plannerino} alt={"bibo"} height={"40px"} width={"350px"} style={{padding: "20px 0px", marginTop: ""}}/>
                    <div style={{backgroundColor: "#D5A13E", marginLeft: "1000px", padding: "", borderRadius: "5px"}}>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Button style={{color: "white"}}>log out</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Home