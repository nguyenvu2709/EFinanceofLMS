import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./BoardFooter.css";

function BoardFooter() {
  return (
    <div className="board-footer">
      <span className="row-option">
        Hiển thị
        <input type="number" className="row-option-input" />
        hàng trong mỗi trang
      </span>
      <div className="navitigation-page">
        <FaChevronLeft className="navitigation-page-icon" />
        <ul className="navitigation-page-list">
          <li className="navitigation-page-item">
            <a className="navitigation-page-link navitigation-page-link--active">
              1
            </a>
          </li>
          <li className="navitigation-page-item">
            <a className="navitigation-page-link">2</a>
          </li>
          <li className="navitigation-page-item">
            <a className="navitigation-page-link">3</a>
          </li>
          <li className="navitigation-page-item">
            <a className="navitigation-page-link">...</a>
          </li>
          <li className="navitigation-page-item">
            <a className="navitigation-page-link">100</a>
          </li>
        </ul>
        <FaChevronRight className="navitigation-page-icon" />
      </div>
    </div>
  );
}

export default BoardFooter;
