import { Outlet } from "react-router-dom";
import "./tuitionmanagement.css";
import Navbar from "../Navbar/Navbar";
import User from "../User/User";

function Tuitionmanagement() {
    return(
        <div className="Home">
            <Navbar/>
            <User/>
        </div>
    );
}
export default Tuitionmanagement;