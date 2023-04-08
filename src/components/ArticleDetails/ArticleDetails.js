import styles from './ArticleDetails.module.css'

import { IoMdArrowRoundBack } from 'react-icons/io'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { articlesServiceFactory } from '../../services/newsService'
import { useEffect, useState } from 'react';
import { useService } from '../../hooks/useService';
import { useArticlesContext } from '../../contexts/ArticleContext';
import * as commentService from '../../services/commentService'
import { EditComment } from '../EditComments/EditComments';
import { CreateComment } from '../CreateComment/CreateComment';
import Profile from '../Profile/Profile';

export default function ArticleDetails() {
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const { articleId } = useParams();
    const { deleteArticle } = useArticlesContext();
    const navigate = useNavigate();

    const articlesFactory = useService(articlesServiceFactory);

    useEffect(() => {
        Promise.all([articlesFactory.getArticle(articleId), commentService.getAllComments(articleId)])
            .then(([articles, allComments]) => {
                setArticle(articles);
                setComments(allComments);
            })
    }, [articleId])

    const onCommentSubmit = async (values) => {
        try {
            const { name, comment } = values;

            if (!name || !comment) {
                throw new Error("All fields are required")
            }

            const newComment = await commentService.createComment(articleId, values);

            setComments((state) => [...state, newComment]);
        } catch (err) {
            console.log(err.message)
        }
    };

    const onDelete = async () => {
        // eslint-disable-next-line no-restricted-globals
        const confirmation = confirm(`Are you sure you want to delete this article`);

        if (confirmation) {
            await articlesFactory.delete(articleId);

            deleteArticle(articleId)

            navigate('/dailyNews')
        }
    }

    const onDeleteComment = async (commentId) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to delete this comment?");

        if (result) {
            await commentService.deleteComment(articleId, commentId);

            setComments((state) =>
                state.filter((comment) => comment._id !== commentId)
            );

            navigate('/details/' + article._id);
        }
    }

    const isOwner = JSON.parse(localStorage.getItem('auth'))._id === article._ownerId;
    const name = article.name;

    return (
        <main className={styles["main"]}>
            <div className={styles["article-details"]}>
                <article className={styles["news-details"]}>
                    <div className={styles["back-icon"]}>
                        <h2><Link to="/dailyNews"><IoMdArrowRoundBack className={styles["arrow-left-icon"]} /></Link>Current Article</h2>
                    </div>

                    {isOwner ? (
                        <div className={styles["edit-delete"]}>
                            <Link to={`/edit/${articleId}`} className={styles['edit']}>Edit</Link>
                            <button className={styles["delete"]} onClick={onDelete}>Delete</button>
                        </div>
                    ) : null}

                    <div className={styles["news-content"]}>
                        <div className={styles["news-author"]}>
                            <Profile name={name} />

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
                        </div>
                    </div>
                    <h2 className={styles["comment-creation"]}>Create Comment</h2>
                    <CreateComment onCommentSubmit={onCommentSubmit} />
                    {comments.map((c) => {
                        const name = c.name;
                        const isOwner = JSON.parse(localStorage.getItem('auth'))._id === c._ownerId;

                        return (
                            <div key={c._id} className={styles['comment-section']}>
                                <div className={styles['comment-author']}>
                                    <Profile name={name} />

                                    <div className={styles['author-information']}>
                                        <h4 className={styles['author-news-name']}>
                                            {name}
                                        </h4>
                                    </div>
                                </div>

                                <div className={styles['comment-content']}>
                                    <p>{c.comment}</p>
                                </div>

                                {isOwner ? (<div className={styles["edit-del-buttons"]}>
                                    <Link to={`/editComment/${articleId}/${c._id}`} element={<EditComment />} className={styles["edit-button"]}>Edit</Link>
                                    <button className={styles["delete-button"]} onClick={() => onDeleteComment(c._id)}>Delete</button>
                                </div>) : null}
                            </div>
                        )
                    })
                    }
                </article>
            </div>
        </main>)
}