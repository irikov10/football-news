import styles from "./Header.module.css";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header className={styles["hero"]}>
      <nav className={styles["navigation"]}>
        <h1 className={styles["logo"]}>
          Football <span>News</span>
        </h1>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dailyNews"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
            >
              Everyday News
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/transfers"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
            >
              Top Transfers
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li>
                <NavLink to="/logout" className={styles["logout-btn"]}>
                    Logout
                </NavLink>
          </li>
        ) : (
            <li>
                <NavLink to="/login" className={styles["sign-in-button"]}>
                    Sign in
                </NavLink>
          </li>
        )}
        </ul>
      </nav>
    </header>
  );
}
