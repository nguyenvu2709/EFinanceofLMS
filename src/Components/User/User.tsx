import React from "react";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import "./user.css";

function User(){
    return(
        <div className="user">
            <img className="user-logo" src={user}/>
            <p className="user-name">User</p>
            <Link className="logout" to="/login">Đăng xuất</Link>
        </div>
    );
};
export default User;