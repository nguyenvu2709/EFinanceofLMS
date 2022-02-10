import { FaPlus } from "react-icons/fa";
import "../tuitionmanagement.css";
import "./CD.css";
import iconInfo from "../../../assets/iconInfo.png";

function Coursedetail() {
    return(
        <div className="container-board container-board-detailCourses">
            <div className="board-detailCourses-information">
                <div className="board-detailCourses-information-group">
                    <div className="group-title group-title-class">
                        <span className="board-detailCourses-information-class-title">
                            Lớp
                        </span>
                        <span className="board-detailCourses-information-class-title">
                            Khoa
                        </span>
                        <span className="board-detailCourses-information-class-title">
                            Ngành
                        </span>
                    </div>
                    <div className="group-content">
                        <span className="board-detailCourses-information-class-content">
                            KT_197A
                        </span>
                        <span className="board-detailCourses-information-class-content">
                            Kế toán - kiểm toán
                        </span>
                        <span className="board-detailCourses-information-class-content">
                            Kế toán
                        </span>
                    </div>
                </div>
                <div className="board-detailCourses-information-group">
                    <div className="group-title group-title-program">
                        <span className="board-detailCourses-information-class-title">
                            Hệ đào tạo
                        </span>
                        <span className="board-detailCourses-information-class-title">
                            Chương trình học
                        </span>
                        <span className="board-detailCourses-information-class-title">
                            Niên khoá
                        </span>
                    </div>
                    <div className="group-content">
                        <span className="board-detailCourses-information-class-content">
                            Đào tạo theo tín chỉ
                        </span>
                        <span className="board-detailCourses-information-class-content">
                            Đại trà
                        </span>
                        <span className="board-detailCourses-information-class-content">
                            2019-2022
                        </span>
                    </div>
                </div>
            </div>
            <a className="board-detailCourses-listStudents-btn">Danh sách học viên</a>
            <p className="board-detailCourses-quantity">
                Số lượng biểu phí
                <span>02</span>
            </p>
            <div className="board-detailCourses-tuition">
                <div className="board-detailCourses-tuition-header">
                    <div className="board-detailCourses-tuition-title">
                        Danh sách biểu phí
                    </div>
                    <button className="board-detailCourses-tuition-btnAdd">
                        <FaPlus className="board-detailCourses-tuition-btnAdd-iconPlus"/>
                        Thêm biểu phí
                    </button>
                </div>
                <div className="board-detailCourses-tuition-table">
                    <div className="board-detailCourses-tuition-table-header">
                        <span className="board-detailCourses-tuition-table-title">
                            Tên biểu phí
                        </span>
                        <span className="board-detailCourses-tuition-table-title">
                            Ngày cập nhật
                        </span>
                        <span className="board-detailCourses-tuition-table-title">
                            Trạng thái
                        </span>
                        <span className="board-detailCourses-tuition-table-title">
                            Xem chi tiết
                        </span>
                    </div>
                    <ul className="board-detailCourses-tuition-table-list">
                        <li className="board-detailCourses-tuition-table-item">
                            <span className="tuition-table-item tuition-table-item-name">
                                1.Biểu phí thu học phí
                            </span>
                            <span className="tuition-table-item tuition-table-item-update">
                                01/07/2021
                            </span>
                            <span className="tuition-table-item tuition-table-item-status">
                                Chưa áp dụng
                                <span className="tuition-table-item-stopApply">
                                    Ngừng áp dụng
                                </span>
                            </span>
                            <span className="tuition-table-item tuition-table-item-detail">
                                <img className="tuition-table-item-detail-icon" src={iconInfo}/>
                            </span>
                        </li>
                        <li className="board-detailCourses-tuition-table-item">
                            <span className="tuition-table-item tuition-table-item-name">
                                2.Biểu phí thu Bảo hiểm Y tế
                            </span>
                            <span className="tuition-table-item tuition-table-item-update">
                                02/07/2021
                            </span>
                            <span className="tuition-table-item tuition-table-item-status">
                                Chưa áp dụng
                                <span className="tuition-table-item-stopApply">
                                    Ngừng áp dụng
                                </span>
                            </span>
                            <span className="tuition-table-item tuition-table-item-detail">
                                <img className="tuition-table-item-detail-icon" src={iconInfo}/>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Coursedetail