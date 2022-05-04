import {Button, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";


const Description = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {register, handleSubmit} = useForm()
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(async () => {
        await fetch('/event/get/' + params.id)
            .then( (response) => {
                if (response.ok){
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                console.log(data)
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

    if (error) return "Error cannot fetch data....."

    return(
        <div style={{marginTop:"20px", marginRight:"550px"}}>
            <TextField style={{backgroundColor:"white", width:800, borderRadius:"10px"}}
                       variant="standard"
                       placeholder={data.description}
                       disabled={isHidden}
                       multiline
                       inputProps={{maxLength:200}}
                       InputProps={{disableUnderline: true }}
                       {...register("description", {required: true})}
                       rows={13}
                       maxRows={13}
            />
            <Button onClick={() => setIsHidden(!isHidden)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"10px"}}/>
        </div>
    )
}

export default Description;