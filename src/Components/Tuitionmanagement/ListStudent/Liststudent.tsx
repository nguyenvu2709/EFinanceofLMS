import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import BoardSearch from "../../BoardSearch/BoardSearch";
import "./ListStudent.css";
import iconInfo from "../../Assets/IconInfo.png";
import BoardFooter from "../../BoardFooter/BoardFooter";
import { listStudents } from "../../data/listStudents";

const ListStudent = () => {
  return (
    <Fragment>
      <h2 className="container-board-title">Danh sách học viên</h2>
      <div className="container-board container-board-listStudent">
        <div className="board-listStudent-header">
          <span className="board-listStudent-header-className">
            Lớp KT - 19A
          </span>
          <BoardSearch />
        </div>
        <div className="board-listStudent-body">
          <div className="board-listStudent-body-header">
            <div className="board-listStudent-body-header-item">
              <span>STT</span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Tên sinh viên</span>
              <div className="arrow-icons">
                <FaChevronUp className="arrow-icon" />
                <FaChevronDown className="arrow-icon" />
              </div>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>MSSV</span>
              <div className="arrow-icons">
                <FaChevronUp className="arrow-icon" />
                <FaChevronDown className="arrow-icon" />
              </div>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Giới tính</span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Ngày sinh</span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Số biểu phí đã đóng</span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Chế độ miễn giảm </span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Trạng thái</span>
            </div>
          </div>
          <ul className="board-listStudent-body-list">
            {listStudents.map((student, index) => {
              return (
                <li key={index} className="board-listStudent-body-item">
                  <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                    {index + 1}
                  </span>
                  <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                    {student.name}
                  </span>
                  <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                    {student.studentID}
                  </span>
                  <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                    {student.gender ? "Nam" : "Nữ"}
                  </span>
                  <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                    {student.birthday}
                  </span>
                  <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                    {student.quantity}
                  </span>
                  <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                    {student.discount ? "Có" : "Không"}
                  </span>
                  {student.status ? (
                    <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                      Đã thanh toán
                    </span>
                  ) : (
                    <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--notdone">
                      Chưa thanh toán
                    </span>
                  )}

                  <Link
                    className="board-listStudent-body-item-information"
                    to="detail-student"
                  >
                    <img
                      className="board-listStudent-body-item-icon"
                      src={iconInfo}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <span className="board-listStudent-body-total">
            Tổng số sinh viên: {listStudents.length}
          </span>
        </div>
        <BoardFooter />
      </div>
    </Fragment>
  );
};

export default ListStudent;
