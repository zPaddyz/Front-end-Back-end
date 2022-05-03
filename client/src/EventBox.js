import React from "react";
import "./EventBox.css";
import Valley from "./Valley.jpg"
import city from "./city.jpg"
import { useState, useEffect, useRef } from "react";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function EventBox(props){
    const obj = useRef(0);

    const fetchData = async () => {
      const data = await fetch(props.endpoint)
    .then(res => res.json())
    .then(haha => obj.current = haha)
    .then(console.log(obj.current))
    .then(() => !localStorage.getItem(props.get) ? localStorage.setItem(props.get, JSON.stringify(obj.current)) : console.log("already exists"))
  }

  return fetchData(),displayItem(props.get)
}   

function displayItem(get){
    const title = JSON.parse(localStorage.getItem(get)).title;
    const date = JSON.parse(localStorage.getItem(get)).date;
    const picture = JSON.parse(localStorage.getItem(get)).picture;
    const color = JSON.parse(localStorage.getItem(get)).color;
        return(
            <div className="eventBoxes">
                <Button className="myButton" style={{backgroundColor: color}}>
                <p className ="title">{title}</p>
                <img id="test"/>
                {
                (picture === "Valley")? <img src={Valley} className="centerImage"/> : 
                (picture === "city")? <img src={city} className="centerImage"/>:
                <p className="centerImage2">*Intet billede*</p>
                }

                <p className = "date">{date}</p>
                </Button>
            </div>
        )
}

function picturePick(props){
    document.getElementById("imageid").src="../template/save.png";
    const Tpicture = props.picture;
    if(Tpicture === "Valley") document.getElementById("test").src="./Valley.jpg";
    else if(Tpicture === "city")document.getElementById("test").src="./city.jpg";
    else return(<p className="centerImage">*Intet billede*</p>)
}
export default EventBox;