import styles from './Register.module.css'

import { FaEnvelope } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import background from '../../assets/images/overlay-pictures/football-ball.png'

import { Link } from 'react-router-dom'

export default function Register() {
    return (

        <div className={styles["register-container"]} style={{backgroundImage: `url(${background})`}}>

            <form action="#" className={styles["register-form"]}>
                <h2>Register</h2>
                <div className={styles["input-box"]}>
                    <span className={styles["icon"]}><FaEnvelope /></span>
                    <input type="email" required />
                    <label>Email</label>
                </div>

                <div className={styles["input-box"]}>
                    <span className={styles["icon"]}><FaLock /></span>
                    <input type="password" required />
                    <label>Password</label>
                </div>

                <div className={styles["input-box"]}>
                    <span className={styles["icon"]}><FaLock /></span>
                    <input type="password" required />
                    <label>Repeat Password</label>
                </div>

                <button type="submit" className={styles["register-btn"]}>Register</button>

                <div className={styles["login-register"]}>
                    <h4>You Have an account? <Link to="/login" className={styles["login-link"]}>Login</Link></h4>
                </div>
            </form>
        </div>)
    }