import React from "react";
import { Routes, Route } from "react-router-dom";
import Loginform from "./Components/Login/Loginform";
import Loginforget from "./Components/Login/Loginforget";
import Tuitionmanagement from "./Components/Tuitionmanagement/Tutionmanagement";
import Listcourses from "./Components/Tuitionmanagement/ListCourses/Listcourses";
import Coursedetail from "./Components/Tuitionmanagement/CourseDetail/Coursedetail";

function App(){
    return(
        <div className="App">
            <Routes>
                <Route path="login" element={<Loginform/>} />
                <Route path="forget" element={<Loginforget/>} />
                <Route path="Home" element={<Tuitionmanagement/>} >
                    <Route path="list-courses" element={<Listcourses/>} />
                    <Route path="list-courses/detail-course" element={<Coursedetail/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;