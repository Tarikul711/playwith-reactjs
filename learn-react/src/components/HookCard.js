import React, { useState } from 'react'

export default function HookCard(){

    const [count,setCount] = useState(1)
    const handleIncrease = ()=>{
        setCount(count+1)
    }
    const handleDecrease = ()=>{
        setCount(count-1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}