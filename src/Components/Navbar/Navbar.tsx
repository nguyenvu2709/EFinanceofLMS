import React from 'react';
import "./navbar.css";
import Logo from '../../assets/Logo.png';
import money from '../../assets/money.png';
import Basicmoney from '../../assets/Basicmoney.png';
import folder from '../../assets/folder.png';

function Navbar() {
  return (
    <div className='navbar'>
    <div className='navbar-content'>
        <img className='logo' src={Logo}/>
        <div className='navbar-icons'>
            <img className='navbar-icon navbar-icon--active' src={money}/>
            <img className='navbar-icon1' src={Basicmoney}/>
            <img className='navbar-icon2' src={folder}/>
        </div>
    </div>
    <div className='sidebar'>
        <ul className='sidebar-list'>
            <li className='sidebar-title'>
                <a href='#'>
                    <span className='title-content1'>
                        <div className='content1'>
                            Quản lý học phí
                        </div>
                        <ul className='title-list'>
                            <li className='title-item'>Danh sách lớp học</li>
                            <li className='title-item'>Danh sách biểu phí</li>
                            <li className='title-item'>Danh sách khoản thu</li>
                            <li className='title-item'>Hình thưc thu</li>
                            <li className='title-item'>Danh sách chế độ miễn giảm</li>
                            <li className='title-item'>Thu học phí</li>
                        </ul>
                    </span>
                </a>
            </li>
            <li className='sidebar-title'>
                <a href='#'>
                    <span className='title-content2'>
                        Quản lý lương
                    </span>
                </a>
            </li>
            <li className='sidebar-title'>
                <a href='#'>
                    <span className='title-content3'>
                        Đề xuất và phê duyệt
                    </span>
                </a>
            </li>
        </ul>
    </div>
</div>
  );
}

export default Navbar;
