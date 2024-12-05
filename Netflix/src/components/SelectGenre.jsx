import React from "react";
import { fetchDataByGenre, getGenres } from "../store/store";
import styles from "../styles/selectgenres.module.css";
import { useDispatch } from "react-redux";

const SelectGenre = ({ genres, type }) => {
    const dispatch = useDispatch()
  return (
    <div className={styles.selectWrapper}>
      <select className={styles.select} onChange={e=>{
        dispatch(fetchDataByGenre({genre:e.target.value, type}))
      }}>
        {genres.map((genre) => {
          return (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectGenre;
