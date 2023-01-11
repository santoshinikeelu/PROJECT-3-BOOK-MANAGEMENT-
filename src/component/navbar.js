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
            <ul className="nav-ul">

                <li><Link to="/">Home</Link></li>
                <li><Link to="/createUser">User Registration</Link></li>
                <li><Link to="/userlist">Users</Link></li>
                <li><Link to="/update">Update User</Link></li>
                <li><Link to="/delete">Delete User</Link></li>
                {
                    auth ? <li><Link onClick={logout} to="/logout">logOut</Link></li> :
                        <>
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">login</Link></li>
                        </>
                }
            </ul>
        </div>
    )


}

export default Nav