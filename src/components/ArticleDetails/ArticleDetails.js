import styles from './ArticleDetails.module.css'

import fabrizio from '../../assets/news-authors-images/3ifAqala_400x400.jpg';

import { AiOutlineLike } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { FaRegComment } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

import { Link, useParams } from 'react-router-dom'
import { articlesServiceFactory } from '../../services/newsService'
import { useEffect, useState } from 'react';
import { useService } from '../../hooks/useService';

export default function ArticleDetails() {
    const [article, setArticle] = useState([]);
    const { articleId } = useParams();
    const articlesFactory = useService(articlesServiceFactory);

    useEffect(() => {
        articlesFactory.getArticle(articleId)
            .then(setArticle)
    }, [])

    return (
        <main className={styles["main"]}>
            <div className={styles["article-details"]}>
                <article className={styles["news-details"]}>
                    <div className={styles["back-icon"]}>
                        <h2><Link to="/dailyNews"><IoMdArrowRoundBack className={styles["arrow-left-icon"]} /></Link>Current Article</h2>
                    </div>

                    <div className={styles["news-content"]}>
                        <div className={styles["news-author"]}>
                            <img src={article.image} alt="" className={styles["author-img"]} />

                            <div className={styles["author-information"]}>
                                <h4 className={styles["author-news-name"]}>{article.name}</h4>

                                <div className={styles["sub-news-name"]}>
                                    <h4>{article.subName}</h4>
                                </div>
                            </div>
                        </div>

                        <div className={styles["article-news-content"]}>
                            <p className={styles["article-news-text"]}>
                                {article.content}
                            </p>

                            <div className={styles["article-details-image"]}>
                                <img src={article.articleImage} alt="" />
                            </div>

                            <div className={styles["article-details-interactions"]}>
                                <p className={styles["like"]}><AiOutlineLike className={styles["icon"]} /></p>
                                <p className={styles["comment"]}><FaRegComment className={styles["icon"]} /></p>
                            </div>
                        </div>
                    </div>

                    <div className={styles["comment-box"]}>
                        <div className={styles["comment-author"]}>
                            <img src={fabrizio} alt="Fabrizio Romano"
                                className={styles["article-author"]} />

                            <div className={styles["author-information"]}>
                                <h4 className={styles["author-news-name"]}>Fabrizio Romano</h4>
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

                            <div className={styles["author-information"]}>
                                <h4 className={styles["author-news-name"]}>Fabrizio Romano</h4>
                            </div>
                        </div>

                        <div className={styles["comment-content"]}>
                            <p>Great work Fabri, keep it up!</p>
                        </div>

                        <hr className={styles["line"]} />

                    </div>
                </article>
            </div>
        </main>)
}