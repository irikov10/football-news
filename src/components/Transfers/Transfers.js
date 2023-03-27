import styles from './Transfers.module.css';
import argentinianFlag from '../../assets/images/national flags/argentinian flag.jpg'
import enzo from '../../assets/player images/Enzo.png'
import benfica from '../../assets/images/football badges/benfica-badge.svg'
import chelsea from '../../assets/images/football badges/chelsea-badge.png'

export default function Transfers() {

    return (
        <body>

            <div className={styles["transfers-container"]}>

                <div className={styles["top-three"]}>
                    <section className={styles["cards"]}>
                        <section className={styles["player-card"]}>
                            <div className={styles["background-image"]}>
                                <img src={argentinianFlag} alt="Argentinian flag" />
                            </div>

                            <div className={styles["back-image"]}>
                                <img src={enzo} />
                            </div>

                            <div className={styles["content"]}>
                                <h3 className={styles["player-name"]}><span className={styles["red"]}>Enzo</span> 
                                <span className={styles["blue"]}>Fernandez</span>
                                </h3>
                            </div>
                            <h2 className={styles["done-deal"]}><span className={styles["red"]}>Done</span> <span className={styles["blue"]}>Deal!</span></h2>
                            <div className={styles["transfer-info"]}>
                                <div className={styles["deal"]}>
                                    <img src={benfica} alt="BEN badge" className={styles["team"]} />
                                        <i className="fa-solid fa-arrow-right"></i><img
                                            src={chelsea} alt="CHE bagde" className={styles["team"]} />
                                </div>
                                <p className={styles["price"]}>Transfer Price: €121.00m</p>
                            </div>

                            <a href="#" className={styles["read-more"]}>Read More</a>
                        </section>
                    </section>
                </div>
            </div>
        </body>
    )
}