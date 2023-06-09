import styles from './DailyNews.module.css'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { articlesServiceFactory } from '../../services/newsService'
import { useService } from '../../hooks/useService'
import { Link } from 'react-router-dom'
import Profile from '../Profile/Profile'

export default function DailyNews() {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();
    const articlesFactory = useService(articlesServiceFactory);

    useEffect(() => {
        articlesFactory.getAllArticles()
            .then(setArticles)
    }, [])

    const news = articles.map((article) => {

        const showArticleDetails = () => {
            navigate(`/details/articles/${article._id}`)
        }

        const name = article.name;

        return (
            <article className={styles["news"]} key={article._id} onClick={showArticleDetails}>
                <div className={styles["article-content-footer"]}>
                    <div className={styles["author"]}>
                        <Profile name={name} />

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
                <Link to='/create'>Add Article</Link>
            </div>
        </main>
    )
}