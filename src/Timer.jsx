import React, { useEffect } from 'react'
import { useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() =>{
     const Timer = setInterval(() => setTime(time+1),1000);
     return function(){
        clearInterval(Timer);
     }
     
    },[time])

  return (
    <div>
        <h1>Stopwatch</h1>
        <p>Currunt timer is {time}</p>
    </div>
  )
}

export default Timer