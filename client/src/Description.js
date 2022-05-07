import {Button, Grid, TextField, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";


const Description = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("")
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const params = useParams();


    const OnSubmit = (data) => {

        const event = {
            name: data.name,
            description: data.description
        }
        console.log(event);

        axios.put('/event/edit/' + params.id, event).then((res) => {
            setMessage(res.data.msg);
            window.location.reload();
        })
    }

    const deleteEvent = () =>{
        axios.delete('/event/delete/' + params.id).then((res) => {
            setMessage(res.data.msg);
            window.location.replace("/home");
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
                setName(data.name)
                setDescription(data.description)
                setDate(data.date)
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
            <Grid container item alignItems="center" justifyContent="center" direction={'row'} style={{marginTop:""}}>
                <form>
                    <Grid item>
                        <Button style={{position: 'absolute', left: 0,backgroundColor:"white", color:"black", borderRadius:"5px", marginLeft: "10px", marginTop:"10px"}} startIcon={<ArrowBackIcon/>}>Back</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{position: 'absolute', right: 0,backgroundColor:"#6BC4A2", color:"black", marginRight: "10px", marginTop:"10px"}} startIcon={<SaveAltIcon/>} type={"submit"}>Save changes</Button>
                        <Button style={{position: 'absolute', right: 0,backgroundColor:"red", color:"black", marginRight: "10px" ,marginTop:"50px"}}>Delete :)</Button>
                    </Grid>
                    <p style={{paddingTop: "20px", color: "green"}}>Updated</p>
                    <Grid item>
                        <TextField disabled={isHidden}
                                   defaultValue={name}
                                   style={{fontSize:30}}
                                   {...register("name")}/>
                        <Button onClick={() => setIsHidden(!isHidden)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"10px"}}/>
                        <Typography>{date}</Typography>
                    </Grid>
                    <Grid item>
                        <TextField style={{backgroundColor:"white", width:800, borderRadius:"10px", marginLeft:"50px"}}
                                   variant="standard"
                                   defaultValue={description}
                                   disabled={isHidden}
                                   {...register("description")}/>
                                   multiline
                                   inputProps={{maxLength:200}}
                                   InputProps={{disableUnderline: true }}
                                   rows={13}
                                   maxRows={13}/>
                        <Button onClick={() => setIsHidden(!isHidden)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"10px"}}/>
                    </Grid>
                </form>
            </Grid>
        </div>
    )
}

export default Description;