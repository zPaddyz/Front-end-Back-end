import React from "react";
import CountdownTimer from "./CountdownTimer";

import "-/App.css"

function Countdown() {
    //const eventDate = JSON.parse(localStorage.getItem(get)).date;

    const eventDate = 5 * 24 * 60 * 60 * 1000;

    return (
        <div>
            <h1>Countdown Timer</h1>
            <CountdownTimer eventDate={eventDate} />
        </div>
    );
}

export default Countdown