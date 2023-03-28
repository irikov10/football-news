import styles from './Footer.module.css'

import ball from '../../assets/images/overlay pictures/ball.png'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer>
        <nav>
            
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li><a href="#">Daily News</a></li>
                <li><a href="#">Transfers</a></li>
            </ul>
            <img src={ball} alt="football ball" />

             <div className={styles["follow"]}>
                <p>Follow on</p>
                <AiFillGithub className={styles["icon"]} />
             </div>
        </nav>
    </footer>
    )
}