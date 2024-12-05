import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styles from "../styles/player.module.css";
import video from "/videos/video.mp4";
import { useLocation, useNavigate } from "react-router";

const Player = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const videoUrl = location.state?.videoUrl || video;
  return (
    <div>
      <div className={styles.player}>
        <div className={styles.back}>
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video
          src={videoUrl}
          autoPlay
          loop
          controls
        ></video>
      </div>
    </div>
  );
};

export default Player;
