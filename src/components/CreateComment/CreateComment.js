import { v4 as uuid } from 'uuid';
import { useForm } from '../../hooks/useForm';
import styles from './CreateComment.module.css'

export const CreateComment = ({ onCommentSubmit }) => {
    const _id = uuid();

    const { values, changeHandler, onSubmit } = useForm(
        {
            name: '',
            comment: '',
            _ownerId: JSON.parse(localStorage.getItem('auth'))._id,
            _id,
        },
        onCommentSubmit
    );

    return (
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
                <button type="submit" className={styles['post-comment']}>
                    Comment
                </button>
            </form>
        </div>
    )
}