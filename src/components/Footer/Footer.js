import styles from './Footer.module.css'

import ball from '../../assets/images/overlay-pictures/ball.png'
import { AiFillGithub } from 'react-icons/ai'

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <nav className={styles["footer-nav"]}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/dailyNews">Daily News</Link></li>
                    <li><Link to="/transfers">Transfers</Link></li>
                </ul>
                <img src={ball} alt="football ball" />

                <div className={styles["follow"]}>
                    <p>Follow on</p>
                    <Link to="https://github.com/irikov10"
                        target='_blank'
                        rel='noopener noreferrer'>
                        <AiFillGithub className={styles["icon"]} />
                    </Link>
                </div>
            </nav>
        </footer>
    )
}