import { useContext } from "react";

import styles from "./Register.module.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import background from "../../assets/images/overlay-pictures/football-ball.png";

import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      repeatPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <div className={styles["register-container"]}>
        <form
          className={styles["register-form"]}
          id="register"
          method="POST"
          onSubmit={onSubmit}
        >
          <h2>Register</h2>
          <div className={styles["input-box"]}>
            <span className={styles["icon"]}>
              <FaEnvelope />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              required
            />
            <label>Email</label>
          </div>

          <div className={styles["input-box"]}>
            <span className={styles["icon"]}>
              <FaLock />
            </span>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
              required
            />
            <label>Password</label>
          </div>

          <div className={styles["input-box"]}>
            <span className={styles["icon"]}>
              <FaLock />
            </span>
            <input
              type="password"
              id="repeat-password"
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={changeHandler}
              required
            />
            <label>Repeat Password</label>
          </div>

          <button
            type="submit"
            className={styles["register-btn"]}
            value="Register"
          >
            Register
          </button>

          <div className={styles["login-register"]}>
            <h4>
              You Have an account?
              <Link to="/login" className={styles["login-link"]}>
                Login
              </Link>
            </h4>
          </div>
        </form>
      </div>
    </main>
  );
}
