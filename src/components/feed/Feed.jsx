import React from "react";
//import component
import Share from "../share/Share";
import Post from "../post/Post";
//import style
import "./feed.scss";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
