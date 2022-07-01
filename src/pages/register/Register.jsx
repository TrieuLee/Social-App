import React from "react";

//import style
import "./register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">AlohaSocial</h3>
          <span className="registerDesc">
            Kết nối bạn bè và thế giới quanh bạn
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              placeholder="Tên đăng nhập"
              type="text"
              className="registerInput"
            />
            <input placeholder="Email" type="email" className="registerInput" />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="registerInput"
            />
            <input
              placeholder="Nhập lại mật khẩu"
              type="password"
              className="registerInput"
            />
            <button className="registerButon">Đăng ký</button>
            <button className="registerLoginButton">Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}
