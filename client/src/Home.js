import {Button} from "@mui/material";
import plus from "./plus.png";
import React from "react";
import ReactDOM from 'react-dom';
import EventBox from "./EventBox";
import Header from "./Header";

let userEmail = "";

async function welcomeText(){
    let email ="";
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    const welcome = await fetch('/welcome', requestOptions).then( (response) => {
        console.log(response)
        if (response.status === 202) {
            return response.json()
        } else {
            alert("Something went wrong")
        }
    })
    email = JSON.stringify(welcome.message).replaceAll("\"","")
    console.log(email)
    document.getElementById("email").innerText = "Welcome " + email;
    await getEvents(email)
    return userEmail = email
}

async function addEvent(){
    const Name = prompt("Please enter a name for your event", "Event");
    const Description = prompt("Please enter a description for your event","Description");
    const Date = prompt("Please enter a date for your event","00/00/0000");
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": Name,
            "description": Description,
            "email": userEmail,
            "date": Date
        })
    }
    const event = await fetch('/event', requestOptions).then( (response) => {
        console.log(response)
        if (response.status === 200) {
            return response.json()
        } else {
            alert("Event could not be created")
        }
    })
}

async function getEvents(Email){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            "email": Email
        })
    }
    const event = await fetch('/event/get', requestOptions).then( (response) => {
        console.log(response)
        if (response.status === 200) {
            return response.json()
        } else {
            alert("Events could not be received")
        }
    })

    await event.forEach(element => {
        ReactDOM.render(EventBox(element.name,element.id,element.date,"city"), document.body.appendChild(document.createElement('div')));
    })
}

const Home = () =>{
    welcomeText()
    return(
        <div>
            <Header/>
            <h2 style={{marginLeft: "50px"}} id="email"/>
            <Button onClick={() => addEvent()} style={{backgroundColor: "#ffffff", marginLeft: "50px"}} >
            <img src={plus}  height={"200px"} width={"200px"} alt={"Add Event"}/>
            <p>Add new event</p>
            </Button>
        </div>
    )
}
export default Home