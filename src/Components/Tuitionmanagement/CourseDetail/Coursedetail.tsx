import { Fragment, useState } from "react";
import { FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal, { ModalBody, ModalHeader } from "../../Modal/Modal";
import "../tuitionmanagement.css";
import "./CD.css";
import iconInfo from "../../../assets/iconInfo.png";
import { listTuition } from "../../data/Listtuition";

function Coursedetail() {
    const [showModal, setShowModal] = useState(false);
    const [selectDate, setSelectDate] = useState(new Date());
    return(
        <Fragment>
            <div className="container-board container-board-detailCourse">
        <div className="board-detailCourse-information">
          <div className="board-detailCourse-information-group">
            <div className="group-title group-title-class">
              <span className="board-detailCourse-information-class-title">
                Lớp:
              </span>
              <span className="board-detailCourse-information-class-title">
                Khoa:
              </span>
              <span className="board-detailCourse-information-class-title">
                Ngành:
              </span>
            </div>
            <div className="group-content">
              <span className="board-detailCourse-information-class-content">
                KT_197A
              </span>
              <span className="board-detailCourse-information-class-content">
                Kế toán - Kiểm toán
              </span>
              <span className="board-detailCourse-information-class-content">
                Kế toán
              </span>
            </div>
          </div>
          <div className="board-detailCourse-information-group">
            <div className="group-title group-title-program">
              <span className="board-detailCourse-information-class-title">
                Hệ đào tạo:
              </span>
              <span className="board-detailCourse-information-class-title">
                Chương trình học:
              </span>
              <span className="board-detailCourse-information-class-title">
                Niên khóa:
              </span>
            </div>
            <div className="group-content">
              <span className="board-detailCourse-information-class-content">
                Đào tạo theo tín chỉ
              </span>
              <span className="board-detailCourse-information-class-content">
                Đại trà
              </span>
              <span className="board-detailCourse-information-class-content">
                2019-2022
              </span>
            </div>
          </div>
        </div>
        <Link
          to="list-student"
          className="board-detailCourse-listStudents-btn"
        >
          Danh sách học viên
        </Link>
        <p className="board-detailCourse-quantity">
          Số lượng biểu phí:
          <span>02</span>
        </p>
        <div className="board-detailCourse-tuition">
          <div className="board-detailCourse-tuition-header">
            <div className="board-detailCourse-tuition-title">
              Danh sách biểu phí
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="board-detailCourse-tuition-btnAdd"
            >
              <FaPlus className="board-detailCourse-tuition-btnAdd-iconPlus" />
              Thêm biểu phí
            </button>
          </div>
          <div className="board-detailCourse-tuition-table">
            <div className="board-detailCourse-tuition-table-header">
              <span className="board-detailCourse-tuition-table-title">
                Tên biểu phí
              </span>
              <span className="board-detailCourse-tuition-table-title">
                Ngày cập nhật
              </span>
              <span className="board-detailCourse-tuition-table-title">
                Trạng thái
              </span>
              <span className="board-detailCourse-tuition-table-title">
                Xem chi tiết
              </span>
            </div>
            <ul className="board-detailCourse-tuition-table-list">
              <li className="board-detailCourse-tuition-table-item">
                <span className="tuition-table-item tuition-table-item-name">
                  1. Biểu phí thu học phí
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
                  <img
                    src={iconInfo}
                    className="tuition-table-item-detail-icon"
                  />
                </span>
              </li>
              <li className="board-detailCourse-tuition-table-item">
                <span className="tuition-table-item tuition-table-item-name">
                  2. Biểu phí thu Bảo hiểm Y tế
                </span>
                <span className="tuition-table-item tuition-table-item-update">
                  02/07/2021
                </span>
                <span className="tuition-table-item tuition-table-item-status">
                  Đang áp dụng
                  <span className="tuition-table-item-stopApply">
                    Ngừng áp dụng
                  </span>
                </span>
                <span className="tuition-table-item tuition-table-item-detail">
                  <img
                    src={iconInfo}
                    className="tuition-table-item-detail-icon"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal show={showModal}>
        <ModalHeader>
          <h2 className="modal__header-title">Thêm biểu phí</h2>
        </ModalHeader>
        <ModalBody>
          <div className="modal__body-table modal__body-addTuition-table">
            <div className="modal__body-table-header addTuition__table-header">
              <input type="checkbox" className="addTuition-option" />
              <div className="addTuition__header-item">
                <span>STT</span>
              </div>
              <div className="addTuition__header-item">
                <span>Tên biểu phí</span>
                <div className="arrow-icons">
                  <FaChevronUp className="arrow-icon" />
                  <FaChevronDown className="arrow-icon" />
                </div>
              </div>
              <div className="addTuition__header-item">
                <span>Mã biểu phí</span>
              </div>
            </div>
            <ul className="addTuition__table-content">
              {listTuition.map((tuition, index) => {
                return (
                  <li key={index} className="addTuition__table-item">
                    <input type="checkbox" className="addTuition-option" />

                    <span className="addTuition__table-item-information addTuition__table-item-id">
                      {tuition.tuitionID}
                    </span>
                    <span className="addTuition__table-item-information addTuition__table-item-name">
                      {tuition.tuitionName}
                    </span>
                    <span className="addTuition__table-item-information addTuition__table-item-code">
                      {tuition.tuitionCode}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="modal__body-addTuition-calendar">
            <div className="modal__body-addTuition-calendar-group">
              <span className="modal__body-addTuition-calendar-title">
                Ngày bắt đầu:
              </span>
              <DatePicker
                placeholderText="Ngày bắt đầu"
                selected={selectDate}
                onChange={(date) => {
                  if (date != null) setSelectDate(date);
                }}
              />
            </div>
            <div className="modal__body-addTuition-calendar-group">
              <span className="modal__body-addTuition-calendar-title">
                Ngày kết thúc:
              </span>
              <DatePicker
                placeholderText="Ngày kết thúc"
                selected={selectDate}
                onChange={(date) => {
                  if (date != null) setSelectDate(date);
                }}
              />
            </div>
          </div>
        </ModalBody>
      </Modal>  
    </Fragment>
  );
}
export default Coursedetail