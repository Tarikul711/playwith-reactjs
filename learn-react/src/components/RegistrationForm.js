import React, { useState } from 'react'

export default function RegistrationForm() {
    const [user, setUser] = useState({ name: '', email: '' })

    const { name, email } = user
    const handleName = (e) => {
        setUser({ name: e.target.value, email })
    }
    const handleEmail = (e) => {
        setUser({ name, email: e.target.value })
    }
    const handleChange = (e) => {
        // const fieldName = e.target.name
        // if (fieldName === 'name') {
        //     setUser({ name: e.target.value, email })
        // } else {
        //     setUser({ name, email: e.target.value })
        // }

        setUser({...user, [e.target.name]: e.target.value })
    }

    const handleSubmitReq = (e) => {
        console.log(e)
        console.log(user)
        e.preventDefault()
    }
    return ( <
        div >
        <
        form onSubmit = { handleSubmitReq } >
        <
        label
        for = "fname" > Name: < /label> <
        input type = "text"
        id = "name"
        name = "name"
        onChange = { handleChange }
        placeholder = { name }
        /> <
        label
        for = "lname" > Eamil: < /label> <
        input type = "text"
        id = "email"
        name = "email"
        onChange = { handleChange }
        /> <
        button type = 'submit' > Registration < /button> <
        /form> <
        /div>
    )
}