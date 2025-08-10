import React, { useEffect, useState } from "react";
import styles from "../Styles/CountDownTimer.module.css"
import {formatTime} from "../Utils/FormatTimes";
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
            <h2 className={styles.title}> تخفیف های ویژه امروز</h2>
            {
                // if time outed button muss be Gray
                timeLeft > 0 ?(
                    <p className="{style.timer}">
                        زمان باقیمانده :<span>{formatTime(timeLeft)}</span>
                    </p>
                )
                 :(
                        <p className={styles.expired}>زمان به پایان رسید</p>
                    )
                    
            }
            <button className={styles.button} disabled={timeLeft<= 0} > دریافت تخفیف </button>


        </div>
    )
}