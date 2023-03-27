import styles from './Login.module.css'

import { FaEnvelope } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

export default function Login() {
    return (
        <body>
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

                    {/* <div className={styles["remember-me"]}>
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div> */}

                    <button type="submit" className={styles["login-btn"]}>Login</button>

                    <div className={styles["login-register"]}>
                        <h4>Don't have an account? <a href="register.html" className={styles["register-link"]}>Register</a></h4>
                    </div>
                </form>
            </div>
        </body>
    )
}