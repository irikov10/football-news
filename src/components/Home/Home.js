import styles from './Home.module.css'
import mbappe from '../../assets/images/overlay-pictures/kylian-mbappe.png'

export default function Home() {

    return (

        <main className={styles["main"]}>
            <div className={styles["container"]}>
                <div className={styles["col"]}>
                    <h2>Want to keep up with the</h2>
                    <h2>latest football news?</h2>
                    <h4>
                        We can provide you everything you need about your favourite sport
                    </h4>
                </div>

                <img src={mbappe} alt="Kylian Mbappe" />
            </div>
        </main>
    )
}