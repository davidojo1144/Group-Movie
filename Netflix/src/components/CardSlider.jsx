import React, { useRef, useState } from "react";
import Card from "./Card";
import styles from "../styles/cardslicer.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CardSlider = ({ data, title }) => {
  const [showControls, setShowContols] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const handleDirection = (direction) => {
    // console.log(listRef, direction)
    //movie list from right to left and left to right without moving the page
    let distance = listRef.current.getBoundingClientRect().x -70;
    if(direction === "left" && sliderPosition > 0){
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      setSliderPosition(sliderPosition - 1)
    }
    if(direction === "right" && sliderPosition < 4){
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
      setSliderPosition(sliderPosition + 1)
    }
  };
  const listRef = useRef();
  return (
    <div
      className={styles.flexColumn}
      onMouseEnter={() => setShowContols(true)}
      onMouseLeave={() => setShowContols(false)}
    >
      <h1>{title}</h1>
      <div className={styles.wrapper}>
        <div
          className={`${styles.sliderAction} ${styles.left} ${
            !showControls ? styles.none : ""
          }`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className={styles.flexSlider} ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`${styles.sliderAction} ${styles.right} ${
            !showControls ? styles.none : ""
          }`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
