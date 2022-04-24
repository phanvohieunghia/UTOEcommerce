import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div id="login">
      <div className="primer"></div>
      <div className="main">
        <div className="container">
          <div className="logo">
            <img src="/img/header/uto logo image.png" alt="error png" />
          </div>
          <div className="slogan">Make your life simple</div>
          <div className="username login-type">
            <input type="text" placeholder="Tên đăng nhập" />
          </div>
          <div className="password login-type">
            <input type="password" placeholder="Mật khẩu" />
          </div>
          <div className="forgot">
            <span>Quên mật khẩu?</span>
          </div>
          <div className="login login-type">
            <button>ĐĂNG NHẬP</button>
          </div>
          <div className="signup">
            <span>Nếu bạn chưa có mật khẩu?</span>
            <span> Đăng ký ngay</span>
          </div>
          <div className="divider">
            <hr />
            <span>hoặc</span>
          </div>
          <div className="google login-type">
            <div>
              <img
                src={require('assets/images/Login/google_icon.webp')}
                alt="error png"
              />
              <span>Đăng nhập với Google</span>
            </div>
          </div>
          <div className="facebook login-type">
            <div>
              <img
                src={require('assets/images/Login/facebook_icon.webp')}
                alt="error png"
              />
              <span>Đăng nhập với Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
