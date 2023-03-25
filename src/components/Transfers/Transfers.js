import styles from './.././Transfers/Transfers.module.css';

export default function Transfers() {

    return (
        <body>

            <div className={styles["transfers-container"]}>

                <div className={styles["top-three"]}>
                    <section className={styles["cards"]}>
                        <section className={styles["player-card"]}>
                            <div className={styles["background-image"]}>
                                <img src="../../assets/images/national flags/argentinian flag.jpg" alt="Argentinian flag" />
                            </div>

                            <div className={styles=["thumbnail"]}>
                                <img src="../../assets/player images/Enzo.png" />
                            </div>

                            <div className={styles["content"]}>
                                <h3 className={styles["player-name"]}><span className={styles["red"]}>Enzo</span> 
                                <span className={styles["blue"]}>Fernandez</span>
                                </h3>
                            </div>
                            <h2 className={styles["done-deal"]}><span className={styles["red"]}>Done</span> <span className={styles["blue"]}>Deal!</span></h2>
                            <div className={styles["transfer-info"]}>
                                <div className={styles["deal"]}>
                                    <img src="../../assets/images/football badges/benfica-badge.svg" alt="BEN badge" className={styles["team"]} />
                                        <i className="fa-solid fa-arrow-right"></i><img
                                            src="../../assets/images/football badges/chelsea-badge.png" alt="CHE bagde" className={styles["team"]} />
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