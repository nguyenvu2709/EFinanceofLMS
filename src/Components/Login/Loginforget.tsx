
import { Link } from 'react-router-dom';
import bg from '../../assets/bg.png';
import { FaUserCircle, FaChevronLeft} from 'react-icons/fa';
import './login.css';

function Loginforget() {
  function handleOnChange(e: any){
    const formUpdatePassword:  Element | null = document.querySelector("#form-update-password");
    if(formUpdatePassword){
        const btnUpdatePassword: Element | null = formUpdatePassword.querySelector(
            ".form-submit.update-password"
        );
        const usernameInput: Element | null = formUpdatePassword.querySelector(
            'input[name= "account"]'
        );
        const confirmCodeInput: Element | null = formUpdatePassword.querySelector(
            'input[name= "verification-codes"]'
        );

        if (usernameInput != null && confirmCodeInput != null && btnUpdatePassword != null) {
          if((usernameInput as HTMLInputElement).value && (confirmCodeInput as HTMLInputElement).value){
            (btnUpdatePassword as HTMLInputElement).style.background =
              "linear-gradient(270deg, #ff5400 0%, #f17f21 80.56%)";     
          } else{
            (btnUpdatePassword as HTMLInputElement).style.background =
              "#c9c4c0"
            }
          }
        }

        if (e.target.value) {
            e.target.style.backgroundColor = "#fff";
            e.target.style.border = "1px solid rgba(55, 56, 57, 0.5)";
        } else {
            e.target.style.backgroundColor = "#f2f2f2";
            e.target.style.border = "none";
        }
    }
return (
    <div className="login-forget">
        <img src={bg} className="bg"/>    
        <form action="" method='POST' className='form' id='form-update-password'> 
            <h3>Cấp lại mật khẩu</h3>
        
            <div className="login-user">
                <label className='label-control' htmlFor="username">
                    Tên đăng nhập
                </label>
                <input className='login-control'
                id='username'
                name='username'
                type="text"
                onChange={handleOnChange}
                />
            </div>

            <div className="login-password">
                <label className='label-control' htmlFor="password">
                    Mã xác thực
                </label>
                <input className='login-control'
                id='verification-codes'
                name='verification-codes' 
                type="text"
                onChange={handleOnChange}
                />
            </div>

            <Link className='form-option' to="/">
                <span>Quay lại trang chủ</span>
            </Link>

            <div className="form-icons">
            <i className="form-icon1">{<FaUserCircle />}</i>
            <i className="form-icon2">{<FaChevronLeft />}</i>
            </div>

            <div className='Btn'>
            <Link className="update-password" to="/">
              Cấp lại mật khẩu
            </Link>
            </div>
                                       
        </form>  
    </div>
             
);
}

export default Loginforget;
