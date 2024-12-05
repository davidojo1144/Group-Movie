import { React, useState } from "react";
import { useNavigate } from "react-router";
// import video from "/videos/trailerVideo.mp4";
import styles from "../styles/card.module.css";
import {IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handlePlayClick = ()=>{
    navigate("/player")

    // {state: {videoUrl: movieData.video || video}
  }
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.container}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
      />
      {isHovered && (
        <div className={styles.hover}>
          <div className={styles.imageVideo}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              onClick={handlePlayClick}
            />
            <video
              src={video}
              autoPlay
              loop
              onClick={handlePlayClick}
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.name} onClick={handlePlayClick}>
              {movieData.name}
            </h3>
            <div className={styles.icons}>
              <div className={styles.controls}>
                <IoPlayCircleSharp
                  title="play"
                  onClick={handlePlayClick}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck title="Remove From List" />
                ) : (
                  <AiOutlinePlus title="Add to my list" />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className={styles.genres}>
              <ul className={styles.flex}>
                {movieData.genres.map((genres) => (
                  <li key={genres}>{genres}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
