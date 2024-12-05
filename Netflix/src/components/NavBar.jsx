import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

const NavBar = ({isScrolled}) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Tv Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  const [showSearch, setShowSearch] = useState(false)
  const [inputHover, setInputHover] = useState(false)
  
  return (
    <div>
      <nav className={`flex ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.left}>
          <div className={styles.brand}>
          <img src="/images/Netflix.png" className={styles.logo} alt="logo" />
        </div>
        <ul className={styles.links}>
          {links.map(({name, link}) => {
            return (
              <li key={name} className={styles.bakeMistery}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
        </div>
        <div className={styles.rightFlex}>
            <div className={`searchBox ${showSearch ? styles.showSearch : ""}`}>
                <button className = {styles.searchBar}onFocus={()=>setShowSearch(true)} onBlur={
                    ()=>{
                        if(!inputHover) setShowSearch(false)
                    }
                }>
                    <FaSearch/>
                </button>
                <input type="text" placeholder="Search" className={styles.navBarInput}onMouseEnter={()=>setInputHover(true)} onMouseLeave={()=>setInputHover(false)}
                onBlur={()=>{
                    setShowSearch(false)
                    setInputHover(false)
                }}/>
            </div>
            <button className={styles.signOff}onClick={()=>signOut(firebaseAuth)}>
                <FaPowerOff/>
            </button>
            </div>
      </nav>
    </div>
  );
};
export default NavBar;
