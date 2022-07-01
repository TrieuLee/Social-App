import React from "react";
//import icon
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmarks,
  HelpOutline,
  WorkOutline,
  School,
} from "@mui/icons-material";

//import style
import "./sidebar.scss";
import Friend from "../friend/Friend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Nhắn tin</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Nhóm</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className="sidebarListItemText">Đánh dấu</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Câu hỏi</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Tuyển dụng</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Học tập</span>
          </li>
        </ul>
        <button className="sidebarBtn">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
        </ul>
      </div>
    </div>
  );
}
