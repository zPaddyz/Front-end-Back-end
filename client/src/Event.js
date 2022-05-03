import {AppBar, Button, Divider, Grid, TextField, Toolbar, Typography} from "@mui/material";
import Plannerino from "./Plannerino.png";
import {Link, useParams} from "react-router-dom";
import Header from "./Header";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import Description from "./Description";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import EditIcon from '@mui/icons-material/Edit';
import {useEffect, useState} from "react";
import axios from 'axios';

const Event = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(async () => {
        await fetch('/event/get/8f75f1b5-b1f0-4fa7-809c-c2606e67a0ec')
            .then( (response) => {
                if (response.ok){
                    console.log(response.data)
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.log("error fetching data: ", error)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (isLoading) return "Loading data........"

    if (error) return "Fuck this shit"

    return(
        <div style={{backgroundColor: "#F6EFDF"}}>
            <Header/>
            <Grid container item alignItems="center" justifyContent="center" direction={'row'} style={{marginTop:"20px"}}>
                <Grid item style={{marginRight:"30%"}}>
                    <Button style={{backgroundColor:"white", color:"black", borderRadius:"5px"}} startIcon={<ArrowBackIcon/>}>Back</Button>
                </Grid>
                <Grid item>
                    <TextField disabled={isHidden} defaultValue={data.name} style={{fontSize:30}} />
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