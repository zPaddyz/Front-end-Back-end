import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ExpiredMessage = () => {
    return (
        <div className="expired-message">
            <span>Event over</span>
            <p>Hope you had a good time!</p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds}) => {
    return (
        <div className="show-counter">
            <p>
            <DateTimeDisplay values{days} type={"Days"} />
            <p>:</p>
            <DateTimeDisplay values={hours} type={"Hours"} />
            <p>:</p>
            <DateTimeDisplay values={minutes} type={"Minutes"} />
            <p>:</p>
            <DateTimeDisplay values={seconds} type={"Seconds"} />
            </p>
        </div>
    );
};

const CountdownTimer = ({ eventDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(eventDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredMessage />;
    } else {
        return (
            <showCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default  CountdownTimer;