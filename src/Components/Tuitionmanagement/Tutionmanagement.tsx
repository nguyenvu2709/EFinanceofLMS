import { Outlet } from "react-router-dom";
import "./tuitionmanagement.css";
import Navbar from "../Navbar/Navbar";
import User from "../User/User";
import Address from "../Address/Address";

function Tuitionmanagement() {
    return(
        <div className="Home">
            <Navbar/>
            <User/>
            <Address/>
            <Outlet/>
        </div>
    );
}
export default Tuitionmanagement;