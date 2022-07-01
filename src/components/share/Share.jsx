import React from "react";
//import icon
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
//import style
import "./share.scss";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/avatars/1.jpg" alt="" className="shareProfileImg" />
          <input
            placeholder="Bạn đang suy nghĩ gì, Triều"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Hình hoặc Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Gắn thẻ</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Địa điểm</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Cảm xúc hiện tại</span>
            </div>
          </div>
          <button className="shareButton">Chia sẽ</button>
        </div>
      </div>
    </div>
  );
}
