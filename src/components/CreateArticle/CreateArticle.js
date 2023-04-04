import styles from './CreateArticle.module.css'
import { useArticlesContext } from '../../contexts/ArticleContext'
import { useForm } from '../../hooks/useForm'

export const CreateArticle = () => {

    const { onCreateArticleSubmit } = useArticlesContext();

    const { values, changeHandler, onSubmit } = useForm(
        {
            name: '',
            subName: '',
            content: '',
            articleImage: '',
        }, onCreateArticleSubmit
    )
    return (
        <div className={styles["create-article"]}>

            <h1>Create Article</h1>

            <form
                className={styles["create-form"]}
                id="createForm"
                method="POST"
                onSubmit={onSubmit}
            >
                <div className={styles["input-box"]}>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        id={styles["content"]}
                        values={values.name}
                        onChange={changeHandler}
                    />
                </div>

                <div className={styles["input-box"]}>
                    <label>Subname: </label>
                    <input
                        type="text"
                        name="subName"
                        id={styles["content"]}
                        values={values.subName}
                        onChange={changeHandler}
                    />
                </div>


                <div className={styles["input-box"]}>
                    <label>Content: </label>
                    <input
                        type="text"
                        name="content"
                        id={styles["content"]}
                        values={values.content}
                        onChange={changeHandler}
                    />
                </div>

                <div className={styles["input-box"]}>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="articleImage"
                        id={styles["article-image"]}
                        values={values.articleImage}
                        onChange={changeHandler}
                    />
                </div>

                <div className={styles["create-post-button"]}>
                    <button type="submit" value="Create">Post</button>
                </div>
            </form>
        </div>
    )
}