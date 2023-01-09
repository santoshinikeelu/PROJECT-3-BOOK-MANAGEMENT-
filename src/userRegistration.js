import React from "react";
import './index.css';

class UserForm extends React.Component{
    constructor(){
        super()
        this.state ={
           
        }

    }

    onSubmit(ele){
        ele.preventDefault();
        console.log("done addition")
    }

    onClick(ele){
        ele.preventDefault();
        let firstName = document.querySelector("#firstName").value
        let lastName = document.querySelector("#lastName").value
        let country = document.querySelector("#country").value
        let gender = document.querySelector("#gender").value
        let file = document.querySelector("#file").value
        let email = document.querySelector("#email").value
        let mobile = document.querySelector("#mobile").value
        let password = document.querySelector("#password").value
         
        if(firstName ==="" || lastName ==="" || country === "" || gender ==="" || mobile ==="" || file === "" || email ==="" || password ==="") {
            alert("please provide all fields")
        }
        console.log("Details of user is :")
        console.log(firstName)
        console.log(lastName)
        console.log(country)
        console.log(gender)
        console.log(file)
        console.log(email)
    }


    render(){
        return (
            <div className="UserForm"> 
            <h1>Registration form</h1>
                <form onSubmit={ (ele) => this.onSubmit(ele)}>
                    <label>First Name :</label>
                    <input id = "firstName" type={"text"} placeholder = "Enter your First Name"></input>
                    <br/>
                    <label>Last Name :</label>
                    <input id = "lastName" type={"text"} placeholder = "Enter your Last Name"></input>
                    <br/>
                    <label>country :</label>
                    <input id = "country" type={"text"} placeholder = "Enter your country name"></input>
                    <br/>
                    <label>Email:</label>
                    <input id= "email" type={"email"} placeholder = "Enter your email"></input>
                    <br/>
                    <label>PhoneNumber:</label>
                    <input id= "mobile" type={"mobile"} placeholder = "Enter your phone Number"></input>
                    <br/>
                    <label>Password:</label>
                    <input id= "password" type={"password"} placeholder = "Enter your password"></input>
                    <br/>
                    <label>Gender :</label>
                    <select id ="gender">
                        <option>select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <br/>
                    <label>Profile Picture :</label>
                    <input id = "file" type={"file"} placeholder = "Add Profile Picture"></input>
                    <br/>
                    <button onClick = { (ele) => {this.onClick(ele)}}>Submit</button>
                </form>
            </div>
        )
    }
}


export default UserForm ;