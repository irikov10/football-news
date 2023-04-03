import styles from './DailyNews.module.css'
import { AiOutlineLike } from "react-icons/ai"
import { FaRegComment } from 'react-icons/fa'
import ArticleDetails from '../ArticleDetails/ArticleDetails'

import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllArticles } from '../../services/newsService'

export default function DailyNews() {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    console.log(articles)

    useEffect(() => {
        getAllArticles()
            .then(setArticles)
            .catch(error => console.log(error.message))
    }, [])

    const news = articles.map((article) => {
        console.log(article)

        const showArticleDetails = () => {
            navigate(`/details/articles/${article._id}`)
        }

        return (
            <article className={styles["news"]} key={article._id} onClick={showArticleDetails}>
                <div className={styles["article-content-footer"]}>
                    <div className={styles["author"]}>
                        <img src={article.image} alt=""
                            className={styles["article-author"]} />

                        <div className={styles["author-info"]}>
                            <h4 className={styles["author-name"]}>{article.name}</h4>

                            <div className={styles["sub-name"]}>
                                <h4>{article.subName}</h4>
                            </div>
                        </div>
                    </div>

                    <div className={styles["article-content"]}>
                        <h3 className={styles["article-text"]}>{article.content}</h3>

                        <div className={styles["article-content-image"]}>
                            <img src={article.articleImage} />
                        </div>
                    </div>
                </div>

                <div className={styles["interactions"]}>
                    <p className={styles["like"]}><AiOutlineLike className={styles["interactions-icon"]} />Like</p>
                    <p className={styles["comment"]}><FaRegComment className={styles["interactions-icon"]} />Comment</p>
                </div>
            </article>
        )
    })

    return (

        <main className={styles["main"]} style={{ backgroundColor: 'lightblue' }}>
            <h1>Daily News</h1>
            <div className={styles["container"]}>
                {news}
            </div>

            <div className={styles["add-article"]}>
                <button><i className="fa-solid fa-plus"></i>Add Article</button>
            </div>


        </main>
    )
}