import React from "react"
import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div>
            <ul className="nav-ul">

                <li><Link to="/">Home</Link></li>
                <li><Link to="/createUser">User Registration</Link></li>
                <li><Link to="/userlist">Users</Link></li>
                <li><Link to="/update">Update User</Link></li>
                <li><Link to="/delete">Delete User</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>

            </ul>
        </div>
    )


}

export default Nav