export default function EditArticle() {
    return (
        <body>
            <div className="edit-article">

                <h1>Edit Article</h1>

                <form action="#" className="create-form">
                    <div className="input-box">
                        <label>Content:</label>
                        <input type="text" name="content" id="content" />
                    </div>

                    <div className="input-box">
                        <label>Image URL:</label>
                        <input type="text" name="imgURL" id="article-image" />
                    </div>

                    <div className="create-edit-button">
                        <a href="#">Edit</a>
                    </div>
                </form>
            </div>
        </body>
    )
}