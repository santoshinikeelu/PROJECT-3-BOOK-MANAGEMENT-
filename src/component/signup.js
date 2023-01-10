import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () =>{
    const [title,setTitle]=useState("")
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")

    const handleSubmit= async ()=>{
        <h1>user successfully registered</h1>
        let result = await fetch(('http://localhost:5000/register'),{
            method:'post',
            body:JSON.stringfy({title,name,phone,email,password,address}),
            headers:{
                "Content-type":"application/JSON"
            }
            })
             result = await result.JSON
             console.log(result)
         if(result){
            navigate('/')
         }
        
        
    }
    return(
        <div className="register">
            <h1>user register</h1>
             <input className="inputbox" type="text" value={title} onChange={((e)=>setTitle(e.target.value))} placeholder="enter title" />
             {/* <select id ="title">
                        <option>select title</option>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Miss</option>
                    </select> */}
             <input className="inputbox" type="text" value={name} onChange={((e)=>setName(e.target.value))} placeholder="enter name" />
            <input className="inputbox" type="Number"value={phone} onChange={((e)=>setPhone(e.target.value))} placeholder="enter phone number" />
            <input className="inputbox" type="email" value={email} onChange={((e)=>setEmail(e.target.value))}placeholder="enter email" /> 
            <input className="inputbox" type="password" value={password} onChange={((e)=>setPassword(e.target.value))}placeholder="enter password" />
            <input className="inputbox" type="object" value={address} onChange={((e)=>setAddress(e.target.value))}placeholder="enter address" />
            <button onClick={handleSubmit} className="appbutton" type="submit">Submit</button>
            
        </div>
    )
}
 
export default Signup