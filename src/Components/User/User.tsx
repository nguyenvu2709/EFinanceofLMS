import React from "react";
import user from "../../assets/user.png";

function User(){
    return(
        <div className="user">
            <img className="user-logo" src={user}/>
            <p className="user-name">User</p>
            <a className="logout">Đăng xuất</a>
        </div>
    );
};
export default User;