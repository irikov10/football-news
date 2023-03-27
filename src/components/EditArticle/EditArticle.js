import styles from './Edit.module.css'

export default function EditArticle() {
    return (
        <body>
            <div className={styles["edit-article"]}>

                <h1>Edit Article</h1>

                <form action="#" className={styles["edit-form"]}>
                    <div className={styles["input-box"]}>
                        <label>Content:</label>
                        <input type="text" name="content" id={styles["content"]} />
                    </div>

                    <div className={styles["input-box"]}>
                        <label>Image URL:</label>
                        <input type="text" name="imgURL" id={styles["article-image"]} />
                    </div>

                    <div className={styles["create-edit-button"]}>
                        <a href="#">Edit</a>
                    </div>
                </form>
            </div>
        </body>
    )
}