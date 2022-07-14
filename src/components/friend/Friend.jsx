import React from "react";
//import style
import "./friend.scss";

export default function Friend() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img src={PF + "avatars/2.jpg"} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">Thien Phuc</span>
    </li>
  );
}
