export default function Login() {
    return (
        <body>
            <div className="login-container">

                <form action="#" className="login-form">
                    <h2>Login</h2>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <span className="icon"><i className="fa-sharp fa-solid fa-lock"></i></span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>

                    <div className="remember-me">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-btn">Login</button>

                    <div className="login-register">
                        <h4>Don't have an account? <a href="register.html" className="register-link">Register</a></h4>
                    </div>
                </form>
            </div>
        </body>
    )
}