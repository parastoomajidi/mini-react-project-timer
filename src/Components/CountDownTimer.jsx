import React, { useEffect, useState } from "react";
import styles from "../Styles/CountDownTimer.module.css"
import formatTime from "../Utils/formatTime";
export const CountDownTimer= ()=>{
    const [timeLeft, setTimeLeft] = useState(30*60);
    useEffect(()=>{
        if(timeLeft <= 0)
            return 
        const timer = setInterval(()=>{
            // decrease 1 second
            setTimeLeft(prev => prev-1);
        },1000);
        return()=> clearInterval(timer);
//  we call  the state [timeLeft] in here
    },[timeLeft])
    return(
        // call css from module
        <div className={styles.card}>
            <h2 className={styles.title}></h2>


        </div>
    )
}