import styles from './DailyNews.module.css'
import fabrizio from '../../assets/news-authors-images/3ifAqala_400x400.jpg'
import { AiOutlineLike } from "react-icons/ai"
import { FaRegComment } from 'react-icons/fa'

import { Link } from 'react-router-dom'

export default function DailyNews() {
    return (

        <main className={styles["main"]} style={{backgroundColor: 'lightblue'}}>
            <h1>Daily News</h1>
            <div className={styles["container"]}>

                <article className={styles["news"]}>
                    <div className={styles["article-content-footer"]}>
                        <div className={styles["author"]}>
                            <img src={fabrizio} alt="Fabrizio Romano"
                                className={styles["article-author"]} />

                            <div className={styles["author-info"]}>
                                <h4 className={styles["author-name"]}>Fabrizio Romano</h4>

                                <div className={styles["sub-name"]}>
                                    <h4>@FabrizioRomano</h4>
                                </div>
                            </div>
                        </div>

                        <div className={styles["article-content"]}>
                            <h3 className={styles["article-text"]}>
                                Internal discussions are taking place at Tottenham on Antonio Conte situation with
                                Daniel
                                Levy
                                to have final say — as Conte's plan to leave at the end of the season was already clear
                                after
                                UCL defeat 🚨⚪️ #THFC

                                Conte's words were directed at the players — not board or owner.
                            </h3>
                        </div>

                        <div className={styles["see-full-article"]}>
                            <Link to="/">See more</Link>
                        </div>
                    </div>

                    <div className={styles["interactions"]}>
                        <p className={styles["like"]}><AiOutlineLike className={styles["interactions-icon"]} />Like</p>
                        <p className={styles["comment"]}><FaRegComment className={styles["interactions-icon"]}/>Comment</p>
                    </div>
                </article>
            </div>

            <div className={styles["add-article"]}>
                <button><i className="fa-solid fa-plus"></i>Add Article</button>
            </div>

            
        </main>
    )
}