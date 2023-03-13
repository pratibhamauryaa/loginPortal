import React from 'react'
import "./login.css"
import { useState } from "react"
import axios from 'axios'

export default function Login() {

    const [user, setUser]= useState({
        mobile:"",
        password:""

    })
    
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    //calling the login api
    const login = () => {
        console.log(user)
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            //setLoginUser(res.data.user)
            //history.push("/")
        })
    }
  return (
    <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="number" name="mobile" value={user.mobile} onChange={handleChange}  placeholder="Enter your mobile number"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login} >Login</div>
            <a href='#' >Forget password</a>
        </div>
  )
}
