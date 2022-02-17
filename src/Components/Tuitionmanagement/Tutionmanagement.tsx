import { Outlet } from "react-router-dom";
import "./tuitionmanagement.css";
import Navbar from "../Navbar/Navbar";
import User from "../User/User";
import Listcourses from "./ListCourses/Listcourses";

function Tuitionmanagement() {
    return(
        <div className="Home">
            <Navbar/>
            <User/>
            <Listcourses/>
        </div>
    );
}
export default Tuitionmanagement;