import React from 'react'
import styles from "../styles/header.module.css"
import Logo from './Logo'
import { useNavigate } from 'react-router'

const Header =(props)=> {
  const navigate = useNavigate();
  return (
    <div className="flex a-center j-between NavBar">
     <Logo/>
     <button onClick={() => navigate(props.login ? "/login": "/signup")} className={styles.btn}>
      {props.login ? "Log In" : "Sign In"}
     </button>
    </div>
  )
}
export default Header
