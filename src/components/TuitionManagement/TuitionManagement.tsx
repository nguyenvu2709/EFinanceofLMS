import { Outlet } from "react-router-dom";
import "./TuitionManagement.css";
import Navbar from "../Navbar/Navbar";
import Account from "../Account/Account";
import Address from "../Address/Address";

function TuitionManagement() {
  return (
    <div className="tuition-management">
      <Navbar />
      <Account />
      <Address />
      <Outlet />
    </div>
  );
}

export default TuitionManagement;
