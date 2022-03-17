import { FaSearch } from "react-icons/fa";
import "./BoardSearch.css";

function BoardSearch() {
  return (
    <div className="board-search">
      <input
        className="board-search-input"
        type="text"
        placeholder="Nhập tên hoặc mã lớp học"
      />
      <FaSearch className="board-search-icon" />
    </div>
  );
}

export default BoardSearch;
