import React from "react";
import { Link } from "react-router-dom";
//import style
import "./topbar.scss";
//import icon
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link className="ulrLogo" to="/" style={{ textDecoration: "none" }}>
          <span className="logo">AlohaSocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Tìm kiếm bạn bè, bài đăng hay video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Trang chủ</span>
          <span className="topbarLink">Thời gian</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/avatars/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
