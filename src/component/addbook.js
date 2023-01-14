import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () =>{
   const [title,setTitle]=useState("")
   const [excerpt,setExcerpt]=useState("")
   const [userId,setUserId]=useState("")
   const [ISBN,setISBN]=useState("")
   const [category,setCategory]=useState("")
   const [subcategory,setSubcategory]=useState("")
   const [releasedAt,setreleasedAt]=useState("")
   const navigate = useNavigate()
   const handleCreate = async () => {
    
    let result = await fetch('http://localhost:3001/books',{
        method:'post',
        body:JSON.stringify({title,excerpt,userId,ISBN,category,subcategory,releasedAt}),
        headers:{
            "Content-type":"application/JSON",
            "x-api-key": JSON.parse(localStorage.getItem('token'))
        }
        })
         result = await result.json()
         console.log(result)
    localStorage.setItem("books" ,JSON.stringify(result))
    
       navigate('/')
    
   }
   
   
    return(
<div className="register">
    <h1>Create Book</h1>

<input className="inputbox" type="text" value={title} onChange={((e)=>setTitle(e.target.value))} placeholder="enter title" />
<input className="inputbox" type="text" value={excerpt} onChange={((e)=>setExcerpt(e.target.value))} placeholder="enter excerpt" />
<input className="inputbox" type="text" value={userId} onChange={((e)=>setUserId(e.target.value))} placeholder="enter userId" />
<input className="inputbox" type="text" value={ISBN} onChange={((e)=>setISBN(e.target.value))} placeholder="enter ISBN" />
<input className="inputbox" type="text" value={category} onChange={((e)=>setCategory(e.target.value))} placeholder="enter category" />
<input className="inputbox" type="text" value={subcategory} onChange={((e)=>setSubcategory(e.target.value))} placeholder="enter subcategory" />
<input className="inputbox" type="text" value={releasedAt} onChange={((e)=>setreleasedAt(e.target.value))} placeholder="enter date" />
<button onClick={handleCreate} className="appbutton" type="submit">Create</button>
</div>

    )
}

export default AddBook