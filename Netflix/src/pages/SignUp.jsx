import { React, useState } from "react";
import styles from "../styles/signup.module.css";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import {useNavigate} from "react-router";
import axios from "axios";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async () => {
    try{
      const {email, password} = formValues;
      const  response =await axios.post("http://localhost:8080",{email,password})

      alert("Sign-up successful!")
      navigate("/login")
    }catch(error){
      console.log(error)
    }
  };
  return (
    <div className={styles.mainContainer}>
      <BackgroundImage />
      <div className={styles.content}>
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, Tv </h1>
            <h1>shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div
            className={`form ${
              showPassword ? "grid--two--columns" : "grid--one-column"
            }`}
          >
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn} className="signUp">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
