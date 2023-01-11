import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate= useNavigate()
    const handleLogin = async () =>{
        console.log("login success ")
        let result = await fetch('http://localhost:3001/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                "Content-type":"application/JSON"
            }
            })
             result = await result.json()
             console.log(result)
             if(result){
        localStorage.setItem("users" ,JSON.stringify(result))
           navigate('/')
             }
             else{
                alert("please enter correct information")
             }
    }
        return(
            <div className="login">
                <input className="inputbox" type="text" value={email} onChange={((e)=>setEmail(e.target.value))} placeholder="enter email" />
                <input className="inputbox" type="text" value={password} onChange={((e)=>setPassword(e.target.value))} placeholder="enter password" />
                <button onClick={handleLogin} className="appbutton" type="submit">Submit</button>

            </div>

    )
}

export default Login