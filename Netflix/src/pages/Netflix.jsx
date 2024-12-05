import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/netflix.module.css";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import GodzillaTitle from "../components/GodzillaTitle";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store/store";
import Slider from "../components/Slider";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [genresLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlayClick = () => {
    navigate("/player");
  };

  return (
    <div className={styles.body}>
      <NavBar isScrolled={isScrolled} />
      <div className={styles.hero}>
        <img
          src="/images/kingkong.jpg"
          alt="bacground"
          className={styles.backgroundImage}
        />
        <div className={styles.container}>
          <GodzillaTitle className={styles.godzillaTitle} />
          <div className={styles.btn}>
            <button
              className={styles.jCenter}
              onClick={handlePlayClick}
            >
              <FaPlay />
              Play
            </button>
            <button className={styles.bottomFles}>
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies}/>
    </div>
  );
}
