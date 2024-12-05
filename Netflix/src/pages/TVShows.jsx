import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchMovies, getGenres } from "../store/store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import styles from "../styles/movies.module.css";
import SelectGenre from "../components/SelectGenre";

const TVShows = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({type:"tv"}));
  }, [genresLoaded, dispatch]);

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

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate("/");
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <NavBar isScrolled={isScrolled} />
      </div>
      <div className={styles.data}>
        <div className={styles.selectGenre}>
          <SelectGenre genres={genres}  type="tv"/>
        </div>
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </div>
  );
};

export default TVShows;
