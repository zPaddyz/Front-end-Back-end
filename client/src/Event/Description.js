import {Button, Grid, TextField, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Countdown from "../Countdown";
import rootStore from "../stores/RootStore"

const Description = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isHidden1, setIsHidden1] = useState(true);
    const [isHidden2, setIsHidden2] = useState(true);
    const [isHidden3, setIsHidden3] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("")
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [color, setColor] = useState();
    const params = useParams();


    const OnSubmit = (data) => {

        const event = {
            name: data.name,
            description: data.description,
            date: data.date,
            color: data.color
        }
        console.log(event);

        rootStore.EventStore.editEvent(params.id, event).then((res) => {
            setMessage(res.data.msg);
            //window.location.reload();
        })
    }

    const deleteEvent = () =>{
        rootStore.EventStore.deleteEvent(params.id).then((res) => {
            setMessage(res.data.msg);
            window.location.replace("/home");
        })

    }



    useEffect(() => {
        rootStore.EventStore.getEvent(params.id)
            .then(response => {
                setName(response.data.name)
                setDescription(response.data.description)
                setDate(response.data.date)
                setColor(response.data.color)
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

    if (error) return "Error..."

    return(
        <div>
            <Grid container item alignItems="center" justifyContent="center" direction={'row'} style={{marginTop:"", height:"800px"}}>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <Grid item>
                        <Button onClick={() => window.location.replace("/home")} style={{position: 'absolute', top:"130px", left: "96px",backgroundColor:"white", color:"black", borderRadius:"5px", marginLeft: "10px", marginTop:"10px"}} startIcon={<ArrowBackIcon/>}>Back</Button>
                    </Grid>
                    <Grid style={{position: 'absolute', top:"346px", left: "96px",backgroundColor:"white", color:"black", borderRadius:"5px", marginLeft: "10px", marginTop:"10px"}}>
                        <Countdown/>
                    </Grid>
                    <Grid item>
                        <Button style={{position: 'absolute', left:"768px", top: "700px", backgroundColor:"#6BC4A2", color:"black", marginRight: "10px", marginTop:"10px"}} startIcon={<SaveAltIcon/>} type={"submit"}>Save changes</Button>
                        <Button onClick={() => deleteEvent()} style={{position: 'absolute', left:"960px", top: "700px", backgroundColor:"red", color:"black", marginRight: "10px" ,marginTop:"10px"}} startIcon={<DeleteForeverIcon></DeleteForeverIcon>}>Delete Event</Button>
                    </Grid>
                    <p style={{paddingTop: "20px", color: "green"}}>{message}</p>
                    <Grid item>
                        <Typography style={{
                            fontSize:20,
                            position: 'absolute',
                            left:"576px",
                            top: "130px"
                        }} >Title<Button onClick={() => setIsHidden(!isHidden)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"5px"}}/></Typography>
                        <TextField disabled={isHidden}
                                   defaultValue={name}
                                   style={{
                                       fontSize:30,
                                       position: 'absolute',
                                       left:"576px",
                                       top: "162px"
                                    }}
                                   {...register("name")}/>
                        <Typography style={{
                            fontSize:20,
                            position: 'absolute',
                            left:"864px",
                            top: "130px"
                        }} >Date<Button onClick={() => setIsHidden1(!isHidden1)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"5px"}}/></Typography>
                        <TextField disabled={isHidden1}
                                   defaultValue={date}
                                   style={{
                                       fontSize:20,
                                       position: 'absolute',
                                       left:"864px",
                                       top: "162px"
                                    }}
                                   {...register("date")}/>
                        <Typography style={{
                            fontSize:20,
                            position: 'absolute',
                            left:"1152px",
                            top: "130px"
                        }}>Color (in text or hex format)<Button onClick={() => setIsHidden2(!isHidden2)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"    5px"}}/></Typography>
                        <TextField disabled={isHidden2}
                                   defaultValue={color}
                                   style={{
                                       fontSize:20,
                                       position: 'absolute',
                                       left:"1152px",
                                       top: "162px"
                                    }}
                                    {...register("color")}/>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item>
                        <Typography style={{
                            fontSize:20,
                            position: 'absolute',
                            left:"576px",
                            top: "270px"
                        }}>Description<Button onClick={() => setIsHidden3(!isHidden3)} startIcon={<EditIcon/>}
                                                                style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"    5px"}}/></Typography>
                        <TextField style={{backgroundColor:"white", width:800, borderRadius:"10px",
                            fontSize:20,
                            position: 'absolute',
                            left:"576px",
                            top: "302px"
                        }}
                                   variant="standard"
                                   defaultValue={description}
                                   disabled={isHidden3}
                                   {...register("description")}
                                   multiline
                                   inputProps={{maxLength:200}}
                                   InputProps={{disableUnderline: true }}
                                   rows={13}
                                   maxRows={13}/>
                    </Grid>

                </form>
            </Grid>
        </div>
    )
}

export default Description;