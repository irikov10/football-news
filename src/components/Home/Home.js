export default function Home() {

    return (
        <body>
            <header className="hero">
                <nav className="navigation">
                    <h1 className="logo">Football <span>News</span></h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Everyday News</a></li>
                        <li><a href="#">Top Transfers</a></li>
                        <li><a href="#">Leagues</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                    <button className="sign-in-button">Sign in</button>
                </nav>
            </header>

            <main id="main">
                <div className="container">
                    <div className="col">
                        <h2>Want to keep up with the</h2>
                        <h2>latest football news?</h2>
                        <h4>
                            We can provide you everything you need about your favourite sport
                        </h4>
                    </div>

                    <img src="./images/overlay pictures/kylian-mbappe.png" alt="Kylian Mbappe" />
                </div>
            </main>
        </body>
    )
}