import styles from './ArticleDetails.module.css'

import fabrizio from '../../assets/news-authors-images/3ifAqala_400x400.jpg';

import { AiOutlineLike } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { FaRegComment } from 'react-icons/fa'

import { Link, Navigate, useParams } from 'react-router-dom'
import { articlesServiceFactory } from '../../services/newsService'
import { useEffect, useState } from 'react';
import { useService } from '../../hooks/useService';
import { useArticlesContext } from '../../contexts/ArticleContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import * as commentService from '../../services/commentService'

export default function ArticleDetails() {

    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const { articleId } = useParams();
    const { deleteArticle } = useArticlesContext();
    const { userId } = useAuthContext()

    const articlesFactory = useService(articlesServiceFactory);
    const isOwner = userId === article._ownerId;

    useEffect(() => {
        articlesFactory.getArticle(articleId)
            .then(setArticle)
    }, [])

    useEffect(() => {
        commentService.getAllComments()
            .then(setComments)
    }, [])

    const onCommentSubmit = async (values) => {
        const newComment = await commentService.createComment(articleId, {
            name: values.name,
            comment: values.comment,
            ownerId: values.ownerId,
        });

        console.log(values.name)

        setComments((state) => [...state, newComment]);
    };

    const { values, changeHandler, onSubmit } = useForm(
        {
            name: '',
            comment: '',
            ownerId: userId
        }, onCommentSubmit
    );

    console.log(comments)

    useEffect(() => {
        articlesFactory.getArticle(articleId)
            .then(setArticle)
    }, [])

    useEffect(() => {
        commentService.getAllComments(articleId)
            .then(setComments)
    }, [])

    const onDelete = async () => {
        // eslint-disable-next-line no-restricted-globals
        const confirmation = confirm(`Are you sure you want to delete this article`);

        if (confirmation) {
            await articlesFactory.delete(articleId);

            deleteArticle(articleId)

            Navigate('/dailyNews')
        }
    }

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
                    ) : ""}

                    <div className={styles["news-content"]}>
                        <div className={styles["news-author"]}>
                            <img src={article.image} alt="" className={styles["author-img"]} />

                            <div className={styles["author-information"]}>
                                <h4 className={styles["author-news-name"]}>Fabrizio Romano</h4>

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

                        <form id="create-comment" method="POST" onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="name"
                                id={styles['comment-name']}
                                placeholder="Bruce Lee"
                                value={values.name}
                                onChange={changeHandler}
                            />
                            <textarea
                                name="comment"
                                id={styles['comment']}
                                cols="30"
                                rows="10"
                                placeholder="Share your thoughts...."
                                value={values.comment}
                                onChange={changeHandler}
                            ></textarea>
                            <button className={styles['post-comment']} type="submit">
                                Comment
                            </button>
                        </form>
                    </div>

                    {comments.map((comment) => (
                        <div key={comment._id} className={styles['comment-section']}>
                            <div className={styles['comment-author']}>
                                <img
                                    src={fabrizio}
                                    className={styles['article-author']}
                                />

                                <div className={styles['author-information']}>
                                    <h4 className={styles['author-news-name']}>
                                        {comment.articleId.name}
                                    </h4>
                                </div>
                            </div>

                            <div className={styles['comment-content']}>
                                <p>{comment.articleId.comment}</p>
                            </div>
                        </div>
                    ))
                    }
                </article>
            </div>
        </main>)
}