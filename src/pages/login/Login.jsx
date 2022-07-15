import React, { useRef } from "react";

//import style
import "./login.scss";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength="8"
            />
            <button className="loginButon" type="submit">
              Đăng nhập
            </button>
            <span className="loginForgot">Quên mật khẩu?</span>
            <button className="loginRegisterButton">
              Đăng ký Tài khoản mới
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
