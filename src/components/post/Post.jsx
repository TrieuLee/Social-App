import React, { useState } from "react";
//import icon
import { MoreVert } from "@mui/icons-material";
//import sryle
import "./post.scss";

export default function Post() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(true);

  const LikeHandler = () => {
    setLike(isLiked ? like + 1 : like - 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={PF + "avatars/2.jpg"} alt="" className="postProfileImg" />
            <span className="postUserName">Thien Phuc</span>
            <span className="postDate">5 phút trước</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Đại Hội Đoàn khoa CNTT Nhiệm kỳ XIV</span>
          <img src={PF + "posts/1.jpg"} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PF + "emotions/like.jpg"}
              onClick={LikeHandler}
              alt=""
              className="likeIcon"
            />
            <img
              src={PF + "emotions/heart.jpg"}
              onClick={LikeHandler}
              alt=""
              className="likeIcon"
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 bình luận</span>
          </div>
        </div>
      </div>
    </div>
  );
}
