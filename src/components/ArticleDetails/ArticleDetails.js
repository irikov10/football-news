import styles from './ArticleDetails.module.css'

import fabrizio from '../../assets/news authors images/3ifAqala_400x400.jpg';
import conte from '../../assets/player images/antonio-conte.jpg';
// import { Like } from 'react-icons/fa/AiOutlineLike'

export default function ArticleDetails() {
    return(
        <body>
    <div className={styles["article-details"]}>
        <article className={styles["news-details"]}>
            <div className={styles["back"]}>
                <h2><a href="./news.html"><i className="fa-solid fa-arrow-left"></i></a>Current Article</h2>
            </div>

            <div className={styles["article-content-footer"]}>
                <div className={styles["author"]}>
                    <img src={fabrizio} alt="Fabrizio Romano" className={styles["article-author"]} />

                    <div className={styles["author-info"]}>
                        <h4 className={styles["author-name"]}>Fabrizio Romano</h4>

                        <div className={styles["sub-name"]}>
                            <h4>@FabrizioRomano</h4>
                        </div>
                    </div>
                </div>

                <div className={styles["article-content"]}>
                    <p className={styles["article-text"]}>
                        Internal discussions are taking place at Tottenham on Antonio Conte situation with
                        Daniel
                        Levy
                        to have final say — as Conte's plan to leave at the end of the season was already clear
                        after
                        UCL defeat 🚨⚪️ #THFC

                        Conte's words were directed at the players — not board or owner.
                    </p>

                    <div className={styles["article-details-image"]}>
                        <img src={conte} />
                    </div>

                    <hr className={styles["line"]} />
{/* 
                    <div className={styles["article-details-interactions"]}>
                        <p className={styles["like"]}><FontAwesomeIcon icon="fa-regular fa-thumbs-up" />30k</p>
                        <p className={styles["dislike"]}><FontAwesomeIcon icon="fa-regular fa-thumbs-down" />100</p>
                        <p className={styles["comment"]}><FontAwesomeIcon icon="fa-regular fa-comment" />2000</p>
                    </div> */}
                    <hr className={styles["line"]} />
                </div>
            </div>

                <div className={styles["comment-box"]}>
                    <div className={styles["comment-author"]}>
                        <img src={fabrizio} alt="Fabrizio Romano"
                            className={styles["article-author"]} />

                        <div className={styles["author-info"]}>
                            <h4 className={styles["author-name"]}>Fabrizio Romano</h4>
                        </div>
                    </div>
                    <textarea name="comment" id={styles["comment"]} cols="30" rows="10"
                        placeholder="Share your thoughts...."></textarea>
                    <button className={styles["post-comment"]}>Comment</button>
                    <hr />
                </div>

                <div className={styles["comment-section"]}>
                    <div className={styles["comment-author"]}>
                        <img src={fabrizio} alt="Fabrizio Romano"
                            className={styles["article-author"]} />

                        <div className={styles["author-info"]}>
                            <h4 className={styles["author-name"]}>Fabrizio Romano</h4>
                        </div>
                    </div>

                    <div className={styles["comment-content"]}>
                        <p>Great work Fabri, keep it up!</p>
                    </div>
                </div>
        </article>
    </div>
</body>

    )
}