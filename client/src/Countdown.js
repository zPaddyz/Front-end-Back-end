import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import rootStore from "./stores/RootStore"

const useStyles = makeStyles({
    card: {
        background: "#333333",
        display: "inline-block",
        margin: "10px",
        minWidth: "150px",
        minHeight: "100px",
        paddingTop: "20px"

    },

    countdownValue: {
        fontFamily:"sans-serif",
        textAlign:"center",
        fontSize: "2rem",
        marginBottom: "10px"
    },

    countdownUnit: {
        fontFamily:"sans-serif",
        textAlign:"center",
        color:"white",
        textTransform: "capitalize"
    }

});

const Countdown = ()=>{

    const classes = useStyles();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [daysLeft, setDaysLeft] = useState();
    const [messageColor, setMessageColor] = useState();
    const [message, setMessage] = useState();
    const params = useParams();

    function getDifferenceInDays(date1, date2) {
        const givenDate1 = new Date(date1);
        const givenDate2 = new Date(date2);
        console.log("time from database  "+givenDate1+"  "+givenDate2)
        const diffInMs = Math.abs(givenDate2 - givenDate1);

        if (givenDate1.getTime() < givenDate2.getTime()){
            setMessage(" ")
            setMessageColor("red")
            return "Expired"
            }
        else{
            setMessage("Days Left")
            setMessageColor("#02F6B9")
            return Math.round(diffInMs / (1000 * 60 * 60 * 24));
            }
    }
    function currentTime() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    function updateCountDown(dbDateData){
        var days = dbDateData[4]+dbDateData[5];
        var months = dbDateData[1]+dbDateData[2]
        var years = dbDateData[7]+dbDateData[8]+dbDateData[9]+dbDateData[10]
        var  dbSetTime = new Date(days + '/' + months + '/' + years);
        setDaysLeft(getDifferenceInDays(dbSetTime,currentTime()))
    }

    useEffect(() => {
        rootStore.EventStore.getEvent(params.id)
            .then(response => {
                updateCountDown(JSON.stringify(response.data.date))
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
        <div className="show-counter">
            <div  className={classes.card}>
                <div style={{color:messageColor}} className={classes.countdownValue}>{daysLeft}</div>
                <div className={classes.countdownUnit}>{message}</div>
            </div>
        </div>
    )
}
export default Countdown