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

    return(
        <div style={{backgroundColor: "#F6EFDF"}}>
            <Header/>
            <Description/>
        </div>
    )
}

export default Event;