import React from "react"
import { Link, useNavigate } from "react-router-dom"
const Nav = () => {
    const auth = localStorage.getItem("users")
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }

    return (
        <div>
            {
            auth ?
            <ul className="nav-ul">

                <li><Link to="/">Home</Link></li>
                <li><Link to="/Booklist">BookList</Link></li>
                <li><Link to="/addbook">CraeteBook</Link></li>
                {/* <li><Link to="/updatebook">UpdateBook</Link></li>
                <li><Link to="/deletebook">DeleteBook</Link></li> */}
                <li><Link onClick={logout} to="/logout">logOut</Link></li>
                </ul>
                 :
                        <ul className="nav-ul nav-design" >
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">login</Link></li>
                        </ul>
                }
           
        </div>
    )


}

export default Nav