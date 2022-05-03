import {AppBar, Button, Divider, Grid, TextField, Toolbar, Typography} from "@mui/material";
import Plannerino from "./Plannerino.png";
import {Link} from "react-router-dom";
import Header from "./Header";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import Description from "./Description";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";

const Event = () => {
    const [isHidden, setIsHidden] = useState(true);
    return(
        <div style={{backgroundColor: "#F6EFDF"}}>
            <Header/>
            <Grid container item alignItems="center" justifyContent="center" direction={'row'} style={{marginTop:"20px"}}>
                <Grid item style={{marginRight:"30%"}}>
                    <Button style={{backgroundColor:"white", color:"black", borderRadius:"5px"}} startIcon={<ArrowBackIcon/>}>Back</Button>
                </Grid>
                <Grid item>
                    <TextField disabled={isHidden} defaultValue="Rejsen Berlin" style={{fontSize:30}} />
                    <Button onClick={() => setIsHidden(!isHidden)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"10px"}}/>
                    <Typography>12/1/2022 - 20/1/2022</Typography>
                </Grid>
                <Grid item style={{marginLeft:"30%"}}>
                    <Button style={{backgroundColor:"#6BC4A2", color:"black"}} startIcon={<SaveAltIcon/>}>Save changes</Button>
                </Grid>
            </Grid>
            <Description/>
            <div>
                <Typography style={{marginTop:"100%"}}>Videre</Typography>
            </div>
        </div>
    )
}

export default Event;