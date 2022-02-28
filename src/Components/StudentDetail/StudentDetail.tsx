import React, { Fragment } from "react";
import "./SD.css";
import iconEye from "../../assets/iconEye.png";
import { BillDone } from "../data/BillDone";

const StudentDetail = () => {
    return(
        <Fragment>
            <h2 className="container-board-title">Hồ sơ học viên</h2>
            <div className="container-board container-board-detailStudent">
                <div className="board-detailStudent-header">
                <h3 className="board-detailStudent-header-title">
                    Thông tin học viên
                </h3>
                <ul className="board-detailStudent-header-listInfo">
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col1">Họ và tên:</span>
                    <p>Bùi Thế Anh</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col2">CMND:</span>
                    <p>123 1234 556</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col3">
                        Loại hình đào tạo:
                    </span>
                    <p>Chính quy</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col4">Khoa:</span>
                    <p>Kế toán - Kiểm toán</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col1">MSSV:</span>
                    <p>171 002 1234</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col2">
                        Trạng thái:
                    </span>
                    <p>Đang học</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col3">
                        Chương trình đào tạo:
                    </span>
                    <p>Đại trà</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col4">Ngành:</span>
                    <p>Kế toán</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col1">Giới tính:</span>
                    <p>Nam</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col2">
                        Chế độ miễn giảm:
                    </span>
                    <p>Không</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col3">
                        Bậc đào tạo:
                    </span>
                    <p>Đại học</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col4">Lớp:</span>
                    <p>KT_19A</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col1">Ngày sinh:</span>
                    <p>25/08/1999</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col2">Mã hồ sơ:</span>
                    <p>DHCQ_171002</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col3">
                        Hệ đào tạo:
                    </span>
                    <p>Tín chỉ</p>
                    </li>
                    <li className="board-detailStudent-header-item">
                    <span className="detailStudent-header-item-col4">Niên khóa:</span>
                    <p>2017 - 2021</p>
                    </li>
                </ul>
                </div>
                <div className="board-detailStudent-body">
                <h3 className="board-detailStudent-body-title">
                    Phiếu thu tổng hợp đã đóng
                </h3>
                <div className="board-detailStudent-body-table">
                    <ul className="detailStudent-body-table-header">
                    <li className="detailStudent-body-table-header-item">STT</li>
                    <li className="detailStudent-body-table-header-item detailStudent-body-table-header-item-col2">
                        Số phiếu
                    </li>
                    <li className="detailStudent-body-table-header-item detailStudent-body-table-header-item-col3">
                        Mã hóa đơn
                    </li>
                    <li className="detailStudent-body-table-header-item detailStudent-body-table-header-item-col4">
                        Ngày thu
                    </li>
                    <li className="detailStudent-body-table-header-item detailStudent-body-table-header-item-col5">
                        Số tiền
                    </li>
                    <li className="detailStudent-body-table-header-item detailStudent-body-table-header-item-col6">
                        Hình thức thu
                    </li>
                    <li className="detailStudent-body-table-header-item detailStudent-body-table-header-item-col7">
                        Đơn vị thu
                    </li>
                    <li className="detailStudent-body-table-header-item detailStudent-body-table-header-item-col8">
                        Chi tiết
                    </li>
                    </ul>
                    <ul className="detailStudent-body-table-content">
                    {BillDone.map((billDone) => {
                        return (
                        <li
                            key={billDone.order}
                            className="detailStudent-body-table-content-item"
                        >
                            <span className="detailStudent-body-table-content-item-col1">
                            {billDone.order}
                            </span>
                            <span className="detailStudent-body-table-content-item-col2">
                            {billDone.billNumber}
                            </span>
                            <span className="detailStudent-body-table-content-item-col3">
                            {billDone.billID}
                            </span>
                            <span className="detailStudent-body-table-content-item-col4">
                            {billDone.billDate}
                            </span>
                            <span className="detailStudent-body-table-content-item-col5">
                            {billDone.billTotal}
                            </span>
                            <span className="detailStudent-body-table-content-item-col6">
                            {billDone.payment}
                            </span>
                            <span className="detailStudent-body-table-content-item-col7">
                            {billDone.cashier}
                            </span>
                            <span className="detailStudent-body-table-content-item-col8">
                            <img src={iconEye} />
                            </span>
                        </li>
                        );
                    })}
                    </ul>
                </div>
                </div>
            </div>
        </Fragment>
    );
};
export default StudentDetail;