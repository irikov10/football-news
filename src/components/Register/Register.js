import styles from './Register.module.css'

import { FaEnvelope } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

export default function Register() {
    <body>
        <div className={styles["register-container"]}>

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
                    <h4>You Have an account? <a href="login.html" className={styles["login-link"]}>Login</a></h4>
                </div>
            </form>
        </div>
    </body>
}