import React from "react";

//import style
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AlohaSocial</h3>
          <span className="loginDesc">
            Kết nối bạn bè và thế giới quanh bạn
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="email" className="loginInput" />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="loginInput"
            />
            <button className="loginButon">Đăng nhập</button>
            <span className="loginForgot">Quên mật khẩu?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
