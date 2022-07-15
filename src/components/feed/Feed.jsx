import React, { useEffect, useState } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
//import style
import "./feed.scss";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/62cd1847647d80fccf55c1f1");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}
