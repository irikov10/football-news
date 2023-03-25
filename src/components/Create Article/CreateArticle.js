export default function CreateArticle() {
    return (
        <body>
            <div className="create-article">

                <h1>Create Article</h1>

                <form action="#" className="create-form">
                    <div className="input-box">
                        <label>Content:</label>
                        <input type="text" name="content" id="content" />
                    </div>

                    <div className="input-box">
                        <label>Image URL:</label>
                        <input type="text" name="imgURL" id="article-image" />
                    </div>

                    <div className="create-post-button">
                        <a href="#">Post</a>
                    </div>
                </form>
            </div>
        </body>
    )
}