import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import LoginForgetForm from "./components/Login/LoginForgetForm/LoginForgetForm";
import TuitionManagement from "./components/TuitionManagement/TuitionManagement";
import ListCourses from "./components/TuitionManagement/ListCourses/ListCourses";
import CourseDetail from "./components/TuitionManagement/CourseDetail/CourseDetail";
import ListStudent from "./components/TuitionManagement/ListStudent/ListStudent";
import StudentDetail from "./components/StudentDetail/StudentDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="password-reset" element={<LoginForgetForm />} />
        <Route path="tuition-management" element={<TuitionManagement />}>
          <Route path="list-courses" element={<ListCourses />} />
          <Route path="list-courses/detail-course" element={<CourseDetail />} />
          <Route
            path="list-courses/detail-course/list-students"
            element={<ListStudent />}
          />
          <Route
            path="list-courses/detail-course/list-students/detail-student"
            element={<StudentDetail />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
