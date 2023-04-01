import styles from './Login.module.css'

import { FaEnvelope } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import background from '../../assets/images/overlay-pictures/football-ball.png'

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useAuthContext } from '../../contexts/AuthContext'


const loginFormKeys = {
    email: 'email',
    password: 'password',
}

export default function Login() {
    const { onLoginSubmit } = useAuthContext();

    const {values, changeHandler, onSubmit } = useForm({
        [loginFormKeys.email]: '',
        [loginFormKeys.password]: ''
    }, onLoginSubmit)

    return (
        <main style={{ backgroundImage: `url(${background})` }}>
            <div className={styles["login-container"]}>

                <form 
                    className={styles["login-form"]}
                    id="login"
                    method="POST"
                    onSubmit={onSubmit}
                >
                    <h2>Login</h2>
                    <div className={styles["input-box"]}>
                        <span className={styles["icon"]}><FaEnvelope /></span>
                        <input 
                            type="email" 
                            id="email"
                            name={loginFormKeys.email}
                            value={values[loginFormKeys.email]}
                            onChange={changeHandler}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className={styles["input-box"]}>
                        <span className={styles["icon"]}><FaLock /></span>
                        <input 
                            id="password" 
                            type="password"
                            name={loginFormKeys.password}
                            value={values[loginFormKeys.password]}
                            onChange={changeHandler}
                            required
                        />
                        <label htmlFor="password">Password</label>
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