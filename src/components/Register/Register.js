export default function Register() {
    <body>
    <div className="register-container">
        
        <form action="#" className="register-form">
            <h2>Register</h2>
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

            <div className="input-box">
                <span className="icon"><i className="fa-sharp fa-solid fa-lock"></i></span>
                <input type="password" required />
                <label>Repeat Password</label>
            </div>

            <button type="submit" className="register-btn">Register</button>

            <div className="login-register">
                <h4>You Have an account? <a href="login.html" className="login-link">Login</a></h4>
            </div>
        </form>
    </div>
</body>
}