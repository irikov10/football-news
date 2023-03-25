export default function DailyNews() {
    return (
        <body>
        <div className="wrapper">
            <header className="hero">
    
                <nav className="navigation">
                    <h1 className="logo">Football <span>News</span></h1>
                    <ul>
                        <li><a href="./home.html">Home</a></li>
                        <li><a href="./news.html">Everyday News</a></li>
                        <li><a href="./transfers.html">Transfers</a></li>
                        <li><a href="./register.html">Register</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                    <a href="./login.html" className="sign-in-button">Sign in</a>
                </nav>
            </header>
        
            <main id="main">
                <h1>Daily News</h1>
                <div className="container">
        
                    <article className="news">
                        <div className="article-content-footer">
                            <div className="author">
                                <img src="./news authors images/3ifAqala_400x400.jpg" alt="Fabrizio Romano"
                                    className="article-author" />
        
                                <div className="author-info">
                                    <h4 className="author-name">Fabrizio Romano</h4>
        
                                    <div className="sub-name">
                                        <h4>@FabrizioRomano</h4>
                                    </div>
                                </div>
                            </div>
        
                            <div className="article-content">
                                <h3 className="article-text">
                                    Internal discussions are taking place at Tottenham on Antonio Conte situation with
                                    Daniel
                                    Levy
                                    to have final say — as Conte's plan to leave at the end of the season was already clear
                                    after
                                    UCL defeat 🚨⚪️ #THFC
        
                                    Conte's words were directed at the players — not board or owner.
                                    
                                </h3>
                            </div>
        
                            <div className="see-full-article">
                                <a href="./news-details.html">See more</a>
                            </div>
                        </div>
        
                        <div className="interactions">
                            <p className="like"><i className="fa-regular fa-thumbs-up"></i>Like</p>
                            <p className="dislike"><i className="fa-regular fa-thumbs-down"></i>Dislike</p>
                            <p className="comment"><i className="fa-regular fa-comment"></i>Comment</p>
                        </div>
                    </article>
                </div>
            </main>
    
            <div className="add-article">
                <button><i className="fa-solid fa-plus"></i>Add Article</button>
            </div>
        </div>
    </body>    
    )
}