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
import {useForm} from "react-hook-form";
import axios from 'axios';

const Event = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [message, setMessage] = useState("")
    const params = useParams();

    const OnSubmit = (data) => {

        const event = {
            name: data.name,
            description: data.description
        }

        axios.put('event/edit/' + params.id).then((res) => {
            setMessage(res.data.msg)
        })

    }



    useEffect(async () => {
        await fetch('/event/get/' + params.id)
            .then( response => {
                if (response.ok){
                    console.log(response)
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
    }, [params.id])



    if (isLoading) return "Loading data........"

    if (error) return "Fuck this shit"

    return(
        <div style={{backgroundColor: "#F6EFDF"}}>
            <Header/>
            <Grid container item alignItems="center" justifyContent="center" direction={'row'} style={{marginTop:"20px"}}>
                <Grid item style={{marginRight:"30%"}}>
                    <Button style={{backgroundColor:"white", color:"black", borderRadius:"5px"}} startIcon={<ArrowBackIcon/>}>Back</Button>
                </Grid>
                <p style={{paddingTop: "20px", color: "green"}}>{message}</p>
                <form onSubmit={handleSubmit(OnSubmit)}>
                <Grid item>
                    <TextField disabled={isHidden} defaultValue={data.name} style={{fontSize:30}}
                               {...register("name", {required: true})}/>
                    <Button onClick={() => setIsHidden(!isHidden)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"10px"}}/>
                    <Typography>12/1/2022 - 20/1/2022</Typography>
                </Grid>
                <Grid item style={{marginLeft:"30%"}}>
                    <Button style={{backgroundColor:"#6BC4A2", color:"black"}} startIcon={<SaveAltIcon/>} type={"submit"}>Save changes</Button>
                </Grid>
                <Grid item>
                    <Description/>
                </Grid>
               </form>
            </Grid>
        </div>
    )
}

export default Event;