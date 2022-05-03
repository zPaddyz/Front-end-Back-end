import {Button, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useState} from "react";


const Description = () => {
    const [isHidden, setIsHidden] = useState(true);
    return(
        <div style={{marginTop:"20px", marginRight:"550px"}}>
            <TextField style={{backgroundColor:"white", width:800, borderRadius:"10px"}}
                       variant="standard"
                       placeholder="                                           Description"
                       disabled={isHidden}
                       multiline
                       inputProps={{maxLength:200}}
                       InputProps={{disableUnderline: true }}
                       rows={13}
                       maxRows={13}
            />
            <Button onClick={() => setIsHidden(!isHidden)} startIcon={<EditIcon/>} style={{color: "black", padding:"0", minHeight:"0", minWidth:"0", marginLeft:"10px"}}/>
        </div>
    )
}

export default Description;