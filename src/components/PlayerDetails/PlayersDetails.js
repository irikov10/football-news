import styles from './PlayersDetails.module.css';
import enzo from '../../assets/player-images/player-details-enzo.jpg';
import background from '../../assets/images/overlay-pictures/stadium.jpg'

export default function PlayersDetails() {
    return (
        <main style={{backgroundImage: `url(${background})`}}>
            <div className={styles["player-details-image"]}>
                <img src={enzo} alt="Enzo Fernandez" />
            </div>

            <div className={styles["player-details-content"]}>
                <h1>Enzo Jeremías Fernández</h1>
                <h2>Nationality: Argentinian</h2>
                <h3>Born: 17 January 2001</h3>

                <p>
                    Enzo Jeremias Fernandez is an is an Argentine professional footballer who plays as a central midfielder for Premier League club Chelsea and the Argentina national team.

                    As an academy graduate of River Plate, Fernández made his first-team debut for the club in 2019, before spending two seasons on loan with Defensa y Justicia. There, he enjoyed a successful campaign which culminated in him winning the Copa Sudamericana and Recopa Sudamericana, before returning to River Plate in 2021. Following his return, Fernández established himself as an integral player for the club, and won the 2021 Argentine Primera División. He joined Portuguese Primeira Liga side Benfica in the summer of 2022. Having played only six months for Benfica, he was purchased by Premier League club Chelsea in January 2023 for a British-record transfer fee.

                    An Argentine international, Fernández previously represented his country at under-18 level before making his senior international debut. He represented Argentina at the 2022 FIFA World Cup, playing an important role in helping his country win their third title, while also winning the tournament's Young Player Award.
                </p>
            </div>
        </main> 
    )
}