import Paper from '@mui/material/Paper';
import Plannerino from "./Plannerino.png"
import {Button, Grid, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    paperStyle: {
        margin: "80px auto",
        backgroundColor: "#F6EFDF",
        width:'400px',
        height: "500px",
        borderRadius: "30px",
        flexDirection: "column"
    },
    imageStyle: {
        height: "40px",
        width: "350px",
        padding: "20px 30px",
        marginTop: "100px"
    },
    buttonStyle: {
        backgroundColor: "#6BC4A2",
        "&:hover": {
            backgroundColor: "#4ca183"
        },
        borderRadius: "20px",
        width: "190px",
        marginTop: "40px"
    }
});


const Register = () => {
    const classes = useStyles();
    return(
        <div>
            <Paper elevation={24} className={classes.paperStyle}>
                <img src={Plannerino} alt={"bibo"} className={classes.imageStyle}/>
                <Grid>
                    <Grid item xs={12}>
                        <TextField label="Username" variant="standard"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="E-mail" variant="standard"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" variant="standard" type="password" style={{marginTop: "10px"}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Confirm password" variant="standard" type="password" style={{marginTop: "10px"}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/home" style={{textDecoration: "none"}}>
                            <Button variant="contained" className={classes.buttonStyle}>Get planning</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Register;