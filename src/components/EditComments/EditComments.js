import styles from './EditComments.module.css'

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import * as commentService from '../../services/commentService'

export const EditComment = () => {
    const { articleId, commentId } = useParams();
    const navigate = useNavigate();

    const onCommentEditSubmit = async (values) => {
        try {
            const { name, comment } = values;

            if (!name || !comment) {
                alert("All fields are required");
            }

            commentService.editComment(articleId, commentId, values);

            navigate(`/details/articles/${articleId}`)
        } catch (err) {
            alert('Error' + err.message)
        }
    }

    const { values, changeHandler, onSubmit, valuesChange } = useForm(
        {
            name: '',
            comment: '',
        },
        onCommentEditSubmit
    );


    useEffect(() => {
        commentService.getComment(articleId, commentId)
            .then((data) => valuesChange(data))
    }, [articleId, commentId])

    return (
        <div className={styles["edit-comment"]}>

            <h1>Edit Comment</h1>

            <form
                id={styles['editComment-form']}
                className={styles["editComment-form"]}
                method="POST"
                onSubmit={onSubmit}
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
                    <label>Content:</label>
                    <input
                        type="text"
                        name="comment"
                        id={styles["comment-content"]}
                        onChange={changeHandler}
                        value={values.comment}
                    />
                </div>

                <div className={styles["create-edit-button"]}>
                    <button type="submit" value="Edit">Edit</button>
                </div>
            </form>
        </div>
    )
}