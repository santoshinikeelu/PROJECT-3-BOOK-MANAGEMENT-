import React, { useEffect, useState } from "react";
 const Booklist =()=>{
    const [books,setBook]=useState("")
    useEffect(()=>{
        handleBooks()
    },[])
    const handleBooks= async ()=>{
        
       
        let result = await fetch('http://localhost:3001/books',{
            headers:{
                "x-api-key": JSON.parse(localStorage.getItem('token'))
            }
        })
            
            result = await result.json()
            setBook(result)
            }
             
             console.log("books",books)
        const deleteBook = () => {
            console.log("delete book")
        }
        
        
        
    
    return(
<div className="booklist">
    <h3>Book List</h3>
    <ul>
        <li>S.No</li>
        <li>Title</li>
        <li>excerpt</li>
        <li>userId</li>
        <li>ISBN</li>
        <li>category</li>
        <li>subcategory</li>
        <li>releasedAt</li>
        <li>operation</li>
    </ul>
    {
        books.map((item,index)=>
            <ul key={item}>
        <li>{index+1}</li>
        <li>{item.title}</li>
        <li>{item.excerpt}</li>
        <li>{item.userId}</li>
        <li>{item.ISBN}</li>
        <li>{item.category}</li>
        <li>{item.subcategory}</li>
        <li>{item.releasedAt}</li>
        <li><button onClick={()=>deleteBook._id}>Delete</button></li>
            

            </ul>
        )
    }
    
</div>    )
    
    }
 export default Booklist