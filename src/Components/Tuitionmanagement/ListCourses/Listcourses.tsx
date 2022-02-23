import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { listCourses } from "../../data/listCourses";
import { Link } from "react-router-dom";
import "./LC.css";
import BoardSearch from "../../BoardSearch/BoardSearch";
import BoardFooter from "../../BoardFooter/BoardFooter";
import iconInfo from "../../../assets/iconInfo.png";

function Listcourses () {
    return(
        <div className="container-board container-board-listCourses">
            <div className="board-listCourses-header">
                <ul className="board-listCourses-header-list">
                    <li className="board-listCourses-header-item">
                        <span className="board-listCourses-header-item-name">
                            Hệ đào tạo
                        </span>
                        <div className="board-listCourses-header-dropdown">
                            <select className="board-listCourses-header-item-options">
                                <option className="board-listCourses-header-item-option"
                                    value="Theo tín chỉ">
                                        Theo tín chỉ
                                </option>
                                <option className="board-listCourses-header-item-option"
                                    value="Theo tháng">
                                        Theo tháng
                                </option>
                            </select>
                            <FaChevronDown className="arrow-down"/>
                        </div>            
                    </li>
                    <li className="board-listCourses-header-item">
                        <span className="board-listCourses-header-item-name">
                            Niên khoá
                        </span>
                        <div className="board-listCourses-header-dropdown">
                            <select className="board-listCourses-header-item-options">
                                <option className="board-listCourses-header-item-option"
                                    hidden
                                    value="">
                                        Chọn niên khoá
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="2020-2021">
                                        2020-2021
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="2019-2020">
                                        2019-2020
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="2020-2021">
                                        2018-2019
                                </option>
                            </select>
                            <FaChevronDown className="arrow-down"/>
                        </div>
                    </li>
                    <li className="board-listCourses-header-item">
                        <span className="board-listCourses-header-item-name">
                            Khoa
                        </span>
                        <div className="board-listCourses-header-dropdown">
                        <select className="board-listCourses-header-item-options">
                                <option className="board-listCourses-header-item-option"
                                    hidden
                                    value="">
                                        Chọn khoa
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Quản trị kinh doanh">
                                        Quản trị kinh doanh
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Kế toán - kiểm toán">
                                        Kế toán - kiểm toán
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Tài chính ngân hàng">
                                        Tài chính ngân hàng
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Kinh tế đối ngoại">
                                        Kinh tế đối ngoại
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Hệ thống thông tin">
                                        Hệ thống thông tin
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Tất cả">
                                        Tất cả
                                </option>
                            </select>
                            <FaChevronDown className="arrow-down"/>
                        </div>
                    </li>
                    <li className="board-listCourses-header-item">
                        <span className="board-listCourses-header-item-name">
                            Ngành
                        </span>
                        <div className="board-listCourses-header-dropdown">
                        <select className="board-listCourses-header-item-options">
                                <option className="board-listCourses-header-item-option"
                                    hidden
                                    value="">
                                        Chọn ngành
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Kiểm toán">
                                        Kiểm toán
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Kế toán">
                                        Kế toán
                                </option>
                                <option className="board-listCourses-header-item-option"                          
                                    value="Tất cả">
                                        Tất cả
                                </option>
                            </select>
                            <FaChevronDown className="arrow-down"/>
                        </div>
                    </li>
                </ul>
                <BoardSearch/>
            </div>
        

            <div className="board-listCourses-body">
                <div className="board-listCourses-body-header">
                    <div className="board-listCourses-body-header-item">
                        <span>STT</span>
                    </div>
                    <div className="board-listCourses-body-header-item">
                        <span>Mã lớp</span>
                        <div className="arrow-icons">
                            <FaChevronUp className="arrow-icon"/>
                            <FaChevronDown className="arrow-icon"/>
                        </div>
                    </div>
                    <div className="board-listCourses-body-header-item">
                        <span>Tên lớp</span>
                        <div className="arrow-icons">
                            <FaChevronUp className="arrow-icon"/>
                            <FaChevronDown className="arrow-icon"/>
                        </div>
                    </div>
                    <div className="body-header-item">
                        <span>Số lượng biểu phí</span>
                    </div>
                    <div className="body-header-item">
                        <span>Ngày cập nhật</span>
                        <div className="arrow-icons1">
                            <FaChevronUp className="arrow-icon"/>
                            <FaChevronDown className="arrow-icon"/>
                        </div>
                    </div>
                </div>
            
            <ul className="body-list">
                {listCourses.map((course) => { 
                    return(
                        <li className="body-item">
                            <span className="body-item-information body-item-id">
                                {course.id}
                            </span>
                            <span className="body-item-information body-item-classCode">
                                {course.classCode}
                            </span>
                            <span className="board-listCourses-body-item-information board-listCourses-body-item-className">
                                {course.className}
                            </span>
                            <span className="board-listCourses-body-item-information board-listCourses-body-item-quantity">
                                {course.quantity}
                            </span>
                            <span className="board-listCourses-body-item-information board-listCourses-body-item-update">
                                {course.update}
                            </span>
                            <Link to="detail-course" className="board-listCourses-body-item-information">
                                <img className="board-listCourses-body-item-icon" src={iconInfo}/>
                            </Link>

                        </li>
                    );
                })}
            </ul>
            </div>
            <BoardFooter/>
        </div>     
    );
}
export default Listcourses;