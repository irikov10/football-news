import styles from './src/components/Header/Header.module.css'

export default function Header() {
    return (
        <body>
            <header className={styles["hero"]}>
                <nav className={styles["navigation"]}>
                    <h1 className={styles["logo"]}>Football <span>News</span></h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Everyday News</a></li>
                        <li><a href="#">Top Transfers</a></li>
                        <li><a href="#">Leagues</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                    <button className={styles["sign-in-button"]}>Sign in</button>
                </nav>
            </header>
        </body>
    )
}