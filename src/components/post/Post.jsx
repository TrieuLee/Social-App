import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
//import icon
import { MoreVert } from "@mui/icons-material";
//import sryle
import "./post.scss";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const LikeHandler = () => {
    setLike(isLiked ? like + 1 : like - 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={"/profile/" + user.username}>
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "avatars/noAvatar.jpg"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.img ? PF + post.img : ""} alt="" className="postImg" />
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
