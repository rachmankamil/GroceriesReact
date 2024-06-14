import React, { useEffect, useState } from "react"

function ClockComponent() {

    const [realClock, setRealClock] = useState(new Date())

    useEffect(()=>{
        const intervalID = setInterval(() => {
            setRealClock(new Date())
        }, 1000);
    })

    return (
        <div>
            <h2>{realClock.toLocaleDateString()} - {realClock.toLocaleTimeString()}</h2>
        </div>
    )
}

export default ClockComponent