import React, { useState } from 'react'

export default function HookCard(){

    const [count,setCount] = useState(1)
    const handleIncrease = ()=>{
        setCount(count+1)
    }
    const handleDecrease = ()=>{
        setCount(count-1)
    }
// hook as normal function..... 
function hnadleNewInc() {
    setCount(count+1)
}

    return (
        <div>
            <p>{count}</p>
            <button onClick={hnadleNewInc}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}