import React from "react";
import Online from "../online/Online";
//import style
import "./rightbar.scss";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/emotions/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            Hôm nay là sinh nhật của <b>Anh Kiệt</b> và <b>3 người khác</b>
          </span>
        </div>
        <img src="assets/posts/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Bạn bè đang hoạt động</h4>
        <ul className="rightbarFriendList">
          <Online />
          <Online />
          <Online />
          <Online />
          <Online />
          <Online />
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Thông tin cá nhân</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Sống tại</span>
            <span className="rightbarInfoValue">Thành phố Hồ Chí Minh</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Đến từ</span>
            <span className="rightbarInfoValue">Long An</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Mối quan hệ</span>
            <span className="rightbarInfoValue">Hẹn hò</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Bạn bè</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/avatars/2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Thien Phuc</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
