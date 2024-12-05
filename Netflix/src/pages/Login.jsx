import { React, useState } from "react";
import styles from "../styles/login.module.css";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { onAuthStateChanged, } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const { email, password } = formValues;
      const response = await axios.post("http://localhost:8080/api/auth/login",{email, password});

      localStorage.setItem("movieToken", response.data.token)
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again");
      } else if (error.code === "auth/user-not-found") {
        alert("No user found with this email.");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }

    // onAuthStateChanged(firebaseAuth, (currentUser) => {
    //   if (currentUser) navigate("/");
    // });
  };
  return (
    <div className={styles.main}>
      <BackgroundImage />
      <div className={styles.content}>
        <Header />
        <div className={styles.formContainer}>
          <div className={styles.boxContainer}>
            <div className={styles.loginForm}>
              <div className="title">
                <h3>Login</h3>
              </div>
              <div className={styles.logincontainer}>
                <label htmlFor="password">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={styles.loginInput}
                  name="email"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <form>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="new-password"
                    value={formValues.password}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </form>
                <button onClick={handleLogin} className={styles.loginbtn}>
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
