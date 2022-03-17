import "./Navbar.css";
import logo from "../Assets/IconLogo.png";
import money from "../Assets/IconMoney.png";
import basicMoney from "../Assets/IconBasicMoney.png";
import folder from "../Assets/IconFolder.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img className="navbar-logo" src={logo} />
        <div className="navbar-icons">
          <img className="navbar-icon navbar-icon--active" src={money} />
          <img className="navbar-icon" src={basicMoney} />
          <img className="navbar-icon" src={folder} />
        </div>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-title">
            <div className="menu-title-content menu-title-content-tuition menu-title-content--active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  className="navbar-menu-icon"
                  d="M9.09091 7.27273H12.7273C12.9684 7.27273 13.1996 7.17695 13.3701 7.00646C13.5406 6.83597 13.6364 6.60474 13.6364 6.36364C13.6364 6.12253 13.5406 5.8913 13.3701 5.72081C13.1996 5.55032 12.9684 5.45454 12.7273 5.45454H10.9091V4.54545C10.9091 4.30435 10.8133 4.07312 10.6428 3.90263C10.4723 3.73214 10.2411 3.63636 10 3.63636C9.7589 3.63636 9.52767 3.73214 9.35718 3.90263C9.18669 4.07312 9.09091 4.30435 9.09091 4.54545V5.45454C8.36759 5.45454 7.6739 5.74188 7.16244 6.25334C6.65098 6.76481 6.36364 7.4585 6.36364 8.18182C6.36364 8.90513 6.65098 9.59883 7.16244 10.1103C7.6739 10.6218 8.36759 10.9091 9.09091 10.9091H10.9091C11.1502 10.9091 11.3814 11.0049 11.5519 11.1754C11.7224 11.3458 11.8182 11.5771 11.8182 11.8182C11.8182 12.0593 11.7224 12.2905 11.5519 12.461C11.3814 12.6315 11.1502 12.7273 10.9091 12.7273H7.27273C7.03162 12.7273 6.80039 12.823 6.62991 12.9935C6.45942 13.164 6.36364 13.3953 6.36364 13.6364C6.36364 13.8775 6.45942 14.1087 6.62991 14.2792C6.80039 14.4497 7.03162 14.5455 7.27273 14.5455H9.09091V15.4545C9.09091 15.6956 9.18669 15.9269 9.35718 16.0974C9.52767 16.2679 9.7589 16.3636 10 16.3636C10.2411 16.3636 10.4723 16.2679 10.6428 16.0974C10.8133 15.9269 10.9091 15.6956 10.9091 15.4545V14.5455C11.6324 14.5455 12.3261 14.2581 12.8376 13.7467C13.349 13.2352 13.6364 12.5415 13.6364 11.8182C13.6364 11.0949 13.349 10.4012 12.8376 9.88971C12.3261 9.37824 11.6324 9.09091 10.9091 9.09091H9.09091C8.84981 9.09091 8.61858 8.99513 8.44809 8.82464C8.2776 8.65415 8.18182 8.42292 8.18182 8.18182C8.18182 7.94071 8.2776 7.70948 8.44809 7.53899C8.61858 7.36851 8.84981 7.27273 9.09091 7.27273ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433288 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 18.1818C8.38179 18.1818 6.79992 17.702 5.45443 16.8029C4.10894 15.9039 3.06025 14.6261 2.44099 13.131C1.82173 11.636 1.6597 9.99092 1.9754 8.40381C2.29109 6.81669 3.07034 5.35883 4.21458 4.21458C5.35883 3.07033 6.81669 2.29109 8.40381 1.97539C9.99093 1.6597 11.636 1.82172 13.131 2.44099C14.6261 3.06025 15.9039 4.10893 16.8029 5.45442C17.702 6.79992 18.1818 8.38179 18.1818 10C18.1818 12.17 17.3198 14.251 15.7854 15.7854C14.251 17.3198 12.17 18.1818 10 18.1818Z"
                  fill="#373839"
                />
              </svg>
              <span>Quản lý học phí</span>
            </div>
            <ul className="menu-title-list menu-title-list-tuition">
              <li className="menu-title-item menu-title-item--active ">
                Danh sách lớp học
              </li>
              <li className="menu-title-item">Danh sách biểu phí</li>
              <li className="menu-title-item">Danh sách khoản thu</li>
              <li className="menu-title-item">Hình thức thu</li>
              <li className="menu-title-item">Danh sách chế độ miễn giảm</li>
              <li className="menu-title-item">Thu học phí</li>
            </ul>
          </li>
          <li className="navbar-menu-title">
            <div className="menu-title-content menu-title-content-salary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  className="navbar-menu-icon"
                  d="M9.09091 7.27273H12.7273C12.9684 7.27273 13.1996 7.17695 13.3701 7.00646C13.5406 6.83597 13.6364 6.60474 13.6364 6.36364C13.6364 6.12253 13.5406 5.8913 13.3701 5.72081C13.1996 5.55032 12.9684 5.45454 12.7273 5.45454H10.9091V4.54545C10.9091 4.30435 10.8133 4.07312 10.6428 3.90263C10.4723 3.73214 10.2411 3.63636 10 3.63636C9.7589 3.63636 9.52767 3.73214 9.35718 3.90263C9.18669 4.07312 9.09091 4.30435 9.09091 4.54545V5.45454C8.36759 5.45454 7.6739 5.74188 7.16244 6.25334C6.65098 6.76481 6.36364 7.4585 6.36364 8.18182C6.36364 8.90513 6.65098 9.59883 7.16244 10.1103C7.6739 10.6218 8.36759 10.9091 9.09091 10.9091H10.9091C11.1502 10.9091 11.3814 11.0049 11.5519 11.1754C11.7224 11.3458 11.8182 11.5771 11.8182 11.8182C11.8182 12.0593 11.7224 12.2905 11.5519 12.461C11.3814 12.6315 11.1502 12.7273 10.9091 12.7273H7.27273C7.03162 12.7273 6.80039 12.823 6.62991 12.9935C6.45942 13.164 6.36364 13.3953 6.36364 13.6364C6.36364 13.8775 6.45942 14.1087 6.62991 14.2792C6.80039 14.4497 7.03162 14.5455 7.27273 14.5455H9.09091V15.4545C9.09091 15.6956 9.18669 15.9269 9.35718 16.0974C9.52767 16.2679 9.7589 16.3636 10 16.3636C10.2411 16.3636 10.4723 16.2679 10.6428 16.0974C10.8133 15.9269 10.9091 15.6956 10.9091 15.4545V14.5455C11.6324 14.5455 12.3261 14.2581 12.8376 13.7467C13.349 13.2352 13.6364 12.5415 13.6364 11.8182C13.6364 11.0949 13.349 10.4012 12.8376 9.88971C12.3261 9.37824 11.6324 9.09091 10.9091 9.09091H9.09091C8.84981 9.09091 8.61858 8.99513 8.44809 8.82464C8.2776 8.65415 8.18182 8.42292 8.18182 8.18182C8.18182 7.94071 8.2776 7.70948 8.44809 7.53899C8.61858 7.36851 8.84981 7.27273 9.09091 7.27273ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433288 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 18.1818C8.38179 18.1818 6.79992 17.702 5.45443 16.8029C4.10894 15.9039 3.06025 14.6261 2.44099 13.131C1.82173 11.636 1.6597 9.99092 1.9754 8.40381C2.29109 6.81669 3.07034 5.35883 4.21458 4.21458C5.35883 3.07033 6.81669 2.29109 8.40381 1.97539C9.99093 1.6597 11.636 1.82172 13.131 2.44099C14.6261 3.06025 15.9039 4.10893 16.8029 5.45442C17.702 6.79992 18.1818 8.38179 18.1818 10C18.1818 12.17 17.3198 14.251 15.7854 15.7854C14.251 17.3198 12.17 18.1818 10 18.1818Z"
                  fill="#373839"
                />
              </svg>
              <span>Quản lý lương</span>
            </div>
            <ul className="menu-title-list menu-title-list-salary menu-title-list-disabled">
              <li className="menu-title-item">Danh sách giáo viên</li>
              <li className="menu-title-item">Danh sách bảng chấm công</li>
              <li className="menu-title-item">Danh sách bảng lương</li>
              <li className="menu-title-item">Danh sách biểu phí</li>
              <li className="menu-title-item">Danh sách khoản chi</li>
              <li className="menu-title-item">Thiết lập ngạch, hạng</li>
              <li className="menu-title-item">Công thức tính lương</li>
            </ul>
          </li>
          <li className="navbar-menu-title">
            <div className="menu-title-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.29 10.79L11 14.09L9.71 12.79C9.5217 12.6017 9.2663 12.4959 9 12.4959C8.7337 12.4959 8.4783 12.6017 8.29 12.79C8.1017 12.9783 7.99591 13.2337 7.99591 13.5C7.99591 13.7663 8.1017 14.0217 8.29 14.21L10.29 16.21C10.383 16.3037 10.4936 16.3781 10.6154 16.4289C10.7373 16.4797 10.868 16.5058 11 16.5058C11.132 16.5058 11.2627 16.4797 11.3846 16.4289C11.5064 16.3781 11.617 16.3037 11.71 16.21L15.71 12.21C15.8983 12.0217 16.0041 11.7663 16.0041 11.5C16.0041 11.2337 15.8983 10.9783 15.71 10.79C15.5217 10.6017 15.2663 10.4959 15 10.4959C14.7337 10.4959 14.4783 10.6017 14.29 10.79ZM19 5.50002H12.72L12.4 4.50002C12.1926 3.91325 11.8077 3.40553 11.2989 3.04718C10.7901 2.68884 10.1824 2.49762 9.56 2.50002H5C4.20435 2.50002 3.44129 2.81609 2.87868 3.3787C2.31607 3.94131 2 4.70437 2 5.50002V18.5C2 19.2957 2.31607 20.0587 2.87868 20.6213C3.44129 21.184 4.20435 21.5 5 21.5H19C19.7956 21.5 20.5587 21.184 21.1213 20.6213C21.6839 20.0587 22 19.2957 22 18.5V8.50002C22 7.70437 21.6839 6.94131 21.1213 6.3787C20.5587 5.81609 19.7956 5.50002 19 5.50002ZM20 18.5C20 18.7652 19.8946 19.0196 19.7071 19.2071C19.5196 19.3947 19.2652 19.5 19 19.5H5C4.73478 19.5 4.48043 19.3947 4.29289 19.2071C4.10536 19.0196 4 18.7652 4 18.5V5.50002C4 5.23481 4.10536 4.98045 4.29289 4.79292C4.48043 4.60538 4.73478 4.50002 5 4.50002H9.56C9.76964 4.49948 9.97416 4.56484 10.1446 4.68686C10.3151 4.80889 10.4429 4.9814 10.51 5.18002L11.05 6.82002C11.1171 7.01864 11.2449 7.19116 11.4154 7.31318C11.5858 7.4352 11.7904 7.50056 12 7.50002H19C19.2652 7.50002 19.5196 7.60538 19.7071 7.79292C19.8946 7.98045 20 8.23481 20 8.50002V18.5Z"
                  fill="#373839"
                />
              </svg>
              <span>Đề xuất và phê duyệt</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
