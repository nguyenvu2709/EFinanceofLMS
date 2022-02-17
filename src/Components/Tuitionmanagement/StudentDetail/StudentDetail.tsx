import React, { Fragment } from "react";
import "./SD.css";
const StudentDetail = () => {
    return(
        <Fragment>
            <h2 className="container-board-title">Hồ sơ sinh viên</h2>
            <div className="container-board container-board-detailStudent">
                <div className="board-detailStudent-header">
                    <div className="board-detailStudent-header-title">
                        Thông tin học viên
                    </div>
                    <ul className="board-detailStudent-header-listInfo">
                        <li className="board-detailStudent-header-item">
                            <span>Họ và tên:</span>
                            <p>Bùi Thế Anh</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>CMND:</span>
                            <p>123 1234 556</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Loại hình đào tạo:</span>
                            <p>Chính quy</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Khoa:</span>
                            <p>Kế toán - Kiểm toán</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>MSSV:</span>
                            <p>171 002 1234</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Trạng thái:</span>
                            <p>Đang học</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Chương trình đào tạo:</span>
                            <p>Đại trà</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Ngành:</span>
                            <p>Kế toán</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Giới tính:</span>
                            <p>Nam</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Chế độ miễn giảm:</span>
                            <p>Không</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Bậc:</span>
                            <p>Đại học</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Lớp:</span>
                            <p>KT_19A</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Ngày sinh:</span>
                            <p>25/08/1999</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Mã hồ sơ:</span>
                            <p>DHCO 171002</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Hệ đào tạo:</span>
                            <p>Tín chỉ</p>
                        </li>
                        <li className="board-detailStudent-header-item">
                            <span>Niên khoá:</span>
                            <p>2017-2021</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};