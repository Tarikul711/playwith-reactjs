import React, { useState } from 'react'

export default function RegistrationForm() {
const [user,setUser] = useState({name:'', email : ''} )

const {name,email} = user
    const handleName = (e)=>{
            setUser({name:e.target.name,email})
    }
    const handleEmail= (e)=>{
        setUser({name,email:e.target.email})
    }
    const handleSubmitReq =(e)=>{
console.log(e)
console.log(user)
e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmitReq}>
                    <label for="fname">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleName} placeholder={name} />
                    <label for="lname">Eamil:</label>
                    <input type="text" id="email" name="email" onChange={handleEmail} />
                    <button type='submit' >Registration</button>
            </form>
        </div>
    )
}
