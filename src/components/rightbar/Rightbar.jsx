import React from "react";
import Online from "../online/Online";
import Friend from "../friend/Friend";
//import style
import "./rightbar.scss";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={PF + "emotions/gift.jpg"} alt="" className="birthdayImg" />
          <span className="birthdayText">
            Hôm nay là sinh nhật của <b>Anh Kiệt</b> và <b>3 người khác</b>
          </span>
        </div>
        <img src={PF + "posts/ad.jpg"} alt="" className="rightbarAd" />
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
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Đến từ</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Mối quan hệ</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Độc thân"
                : user.relationship === 2
                ? "Hẹn hò"
                : "Đã kết hôn"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">Bạn bè</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={PF + "avatars/2.jpg"}
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
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
