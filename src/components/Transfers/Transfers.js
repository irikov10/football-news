import styles from './Transfers.module.css';

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getAllFootballers } from '../../services/playersService';
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Transfers() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getAllFootballers()
            .then(setPlayers)
            .catch(err => err.message)
    }, [])

    console.log(players)

    const cards = players.map((player) => {
        return (
        <section className={styles["player-card"]} key={player._id}>
            <div className={styles["background-image"]}>
                <img src={player.flag} alt="" />
            </div>

            <div className={styles["player-image"]}>
                <img src={player.image} alt={player.lastName} />
            </div>

            <div className={styles["content"]}>
                <h3 className={styles["player-name"]}><span className={styles["red"]}>{player.firstName}</span> <span className={styles["blue"]}>{player.lastName}</span></h3>
            </div>
            <h2 className={styles["done-deal"]}><span className={styles["red"]}>Done</span> <span className={styles["blue"]}>Deal!</span></h2>
            <div className={styles["transfer-info"]}>
                <div className={styles["deal"]}>
                    <img src={player.firstTeam} alt="" className={styles["team"]} />
                    <AiOutlineArrowRight className={styles["transfers-icon"]} /><img
                        src={player.secondTeam} alt="" className={styles["team"]} />
                </div>
                <p className={styles["price"]}>Transfer Price: {player.price}</p>
            </div>

            <Link to={`/details/players/${player._id}`} className={styles["read-more"]}>Read More</Link>
        </section>
        )
    })

    return (

        <div className={styles["transfers-container"]}>

            <div className={styles["top-three"]}>
                <section className={styles["cards"]}>
                    {cards}
                </section>
            </div>
        </div>
    )
}