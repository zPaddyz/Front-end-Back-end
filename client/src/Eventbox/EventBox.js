import React from "react";
import "./EventBox.css";
import Valley from "../images/Valley.jpg"
import city from "../images/city.jpg"
import {Paper} from "@mui/material";



function EventBox(title = "No Title", id,date = "00/00/0000", picture ="null", color = "#F6EFDF"){
        return(


                    <button className="myButton" /*style={{backgroundColor: /*color "#" + ((1<<24)*Math.random() | 0).toString(16)}}*/ onClick={() =>window.location.replace("/event/"+id)}>
                        <Paper elevation={12} style={{backgroundColor: color}}>
                            <ul style ={{listStyleType: "none", /* Remove bullets */
                                    padding: 0, /* Remove padding */
                                    margin: 0 /* Remove margins */}}>
                                    <li>
                                            <p className ="dada">{title}</p>
                                    </li>
                                    <li>
                                            {
                                            //<!--<img id="dada" alt={"picture"}/>-->
                                                    (picture === "Valley")? <img alt = "pic" src={Valley} className="centerImage"/> :
                                                        (picture === "city")? <img alt = "pic" src={city} className="centerImage"/>:
                                                            <p className="centerImage2">*Intet billede*</p>
                                            }
                                    </li>
                                    <li>
                                            <p className = "dada">{date}</p>
                                    </li>
                            </ul>
                        </Paper>
                    </button>
        )
}

export default EventBox;
