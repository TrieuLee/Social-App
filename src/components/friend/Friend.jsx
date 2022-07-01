import React from "react";
//import style
import "./friend.scss";

export default function Friend() {
  return (
    <li className="sidebarFriend">
      <img src="/assets/avatars/2.jpg" alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">Thien Phuc</span>
    </li>
  );
}
