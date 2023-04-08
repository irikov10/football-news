import styles from './PlayersDetails.module.css';
import background from '../../assets/images/overlay-pictures/stadium.jpg'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as playersService from '../../services/playersService'

export default function PlayersDetails() {
    const [player, setPlayer] = useState([]);
    const { playerId } = useParams();

    useEffect(() => {
        playersService.getPlayer(playerId)
            .then(setPlayer)
    }, [playerId])

    return (
        <main style={{ backgroundImage: `url(${background})` }}>
            <div className={styles["player-details-image"]}>
                <img src={player.detailsImage} alt="" />
            </div>

            <div className={styles["player-details-content"]}>
                <h1>{player.firstName} {player.middleName} {player.lastName}</h1>
                <h2>Nationality: {player.nationality}</h2>
                <h3>Born: {player.birthDate}</h3>

                <p>
                    {player.description}
                </p>
            </div>
        </main>
    )
}