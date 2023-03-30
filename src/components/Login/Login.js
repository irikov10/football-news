import styles from './Login.module.css'

import { FaEnvelope } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import background from '../../assets/images/overlay-pictures/football-ball.png'

import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <main style={{ backgroundImage: `url(${background})` }}>
            <div className={styles["login-container"]}>

                <form action="#" className={styles["login-form"]}>
                    <h2>Login</h2>
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

                    <button type="submit" className={styles["login-btn"]}>Login</button>

                    <div className={styles["login-register"]}>
                        <h4>Don't have an account? <Link to="/register" className={styles["register-link"]}>Register</Link></h4>
                    </div>
                </form>
            </div>
        </main>
    )
}