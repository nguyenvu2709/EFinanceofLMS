import React, { Fragment } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import BoardSearch from "../../BoardSearch/BoardSearch";
import BoardFooter from "../../BoardFooter/BoardFooter";
import "./LS.css";
import iconInfo from "../../../assets/iconInfo.png";

const Liststudent = () => {
    return(
        <Fragment>
            <h2 className="list-student-title">Danh sách học viên</h2>
            <div className="container-board container-board-listStudent">
                
            </div>
        </Fragment>
    );
};

export default Liststudent;