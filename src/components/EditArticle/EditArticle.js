import styles from './Edit.module.css'

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArticlesContext } from '../../contexts/ArticleContext';
import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { articlesServiceFactory } from '../../services/newsService';

export default function EditArticle() {

    const { onArticleEditSubmit } = useArticlesContext();
    const { articleId } = useParams();
    const articlesFactory = useService(articlesServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm(
        {
            name: '',
            subName: '',
            content: '',
            articleImage: '',
        },
        onArticleEditSubmit
    );

    useEffect(() => {
        articlesFactory.getArticle(articleId)
            .then((data) => {
                changeValues(data);
            });
    }, [articleId]);

    return (
        <div className={styles["edit-article"]}>

            <h1>Edit Article</h1>

            <form
                className={styles["edit-form"]}
                onSubmit={onSubmit}
                method="POST"
            >

                <div className={styles["input-box"]}>
                    <label>Name:</label>
                    <input type="text"
                        name="name"
                        id={styles["article-image"]}
                        onChange={changeHandler}
                        value={values.name}
                    />
                </div>

                <div className={styles["input-box"]}>
                    <label>SubName:</label>
                    <input
                        type="text"
                        name="subName"
                        id={styles["article-image"]}
                        onChange={changeHandler}
                        value={values.subName}
                    />
                </div>

                <div className={styles["input-box"]}>
                    <label>Content:</label>
                    <input
                        type="text"
                        name="content"
                        id={styles["content"]}
                        onChange={changeHandler}
                        value={values.content}
                    />
                </div>

                <div className={styles["input-box"]}>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="articleImage"
                        id={styles["article-image"]}
                        onChange={changeHandler}
                        value={values.articleImage}
                    />
                </div>

                <div className={styles["create-edit-button"]}>
                    <input type="submit">Edit</input>
                </div>
            </form>
        </div>
    )
}