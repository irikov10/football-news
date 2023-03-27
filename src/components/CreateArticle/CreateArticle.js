import styles from './CreateArticle.module.css'

export default function CreateArticle() {
    return (
        <body>
            <div className={styles["create-article"]}>

                <h1>Create Article</h1>

                <form action="#" className={styles["create-form"]}>
                    <div className={styles["input-box"]}>
                        <label>Content:</label>
                        <input type="text" name="content" id={styles["content"]} />
                    </div>

                    <div className={styles["input-box"]}>
                        <label>Image URL:</label>
                        <input type="text" name="imgURL" id={styles["article-image"]} />
                    </div>

                    <div className={styles["create-post-button"]}>
                        <a href="#">Post</a>
                    </div>
                </form>
            </div>
        </body>
    )
}