export default function ArticleDetails() {
    return(
        <body>
    <div className="article-details">
        <article className="news-details">
            <div className="back">
                <h2><a href="./news.html"><i className="fa-solid fa-arrow-left"></i></a>Current Article</h2>
            </div>

            <div className="article-content-footer">
                <div className="author">
                    <img src="./news authors images/3ifAqala_400x400.jpg" alt="Fabrizio Romano" className="article-author" />

                    <div className="author-info">
                        <h4 className="author-name">Fabrizio Romano</h4>

                        <div className="sub-name">
                            <h4>@FabrizioRomano</h4>
                        </div>
                    </div>
                </div>

                <div className="article-content">
                    <p className="article-text">
                        Internal discussions are taking place at Tottenham on Antonio Conte situation with
                        Daniel
                        Levy
                        to have final say — as Conte's plan to leave at the end of the season was already clear
                        after
                        UCL defeat 🚨⚪️ #THFC

                        Conte's words were directed at the players — not board or owner.
                    </p>

                    <div className="article-details-image">
                        <img src="./player images/antonio-conte.jpg" alt="" />
                    </div>

                    <hr className="line" />

                    <div className="article-details-interactions">
                        <p className="like"><i className="fa-regular fa-thumbs-up"></i>30k</p>
                        <p className="dislike"><i className="fa-regular fa-thumbs-down"></i>100</p>
                        <p className="comment"><i className="fa-regular fa-comment"></i>2000</p>
                    </div>
                    <hr className="line" />
                </div>
            </div>

                <div className="comment-box">
                    <div className="comment-author">
                        <img src="./news authors images/3ifAqala_400x400.jpg" alt="Fabrizio Romano"
                            className="article-author" />

                        <div className="author-info">
                            <h4 className="author-name">Fabrizio Romano</h4>
                        </div>
                    </div>
                    <textarea name="comment" id="comment" cols="30" rows="10"
                        placeholder="Share your thoughts...."></textarea>
                    <button className="post-comment">Comment</button>
                    <hr />
                </div>

                <div className="comment-section">
                    <div className="comment-author">
                        <img src="./news authors images/3ifAqala_400x400.jpg" alt="Fabrizio Romano"
                            className="article-author" />

                        <div className="author-info">
                            <h4 className="author-name">Fabrizio Romano</h4>
                        </div>
                    </div>

                    <div className="comment-content">
                        <p>Great work Fabri, keep it up!</p>
                    </div>
                </div>
        </article>
    </div>
</body>

    )
}