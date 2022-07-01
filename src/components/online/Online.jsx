import React from "react";
//import style
import "./online.scss";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src="assets/avatars/2.jpg" alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">Thien Phuc</span>
    </li>
  );
}
