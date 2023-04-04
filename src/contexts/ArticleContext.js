import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { articlesServiceFactory } from '../services/newsService'

const ArticleContext = createContext();

export const ArticlesProvider = ({ children }) => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const articlesService = articlesServiceFactory();

    useEffect(() => {
        articlesService.getAllArticles()
            .then(data => setArticles(data))
    }, []);

    const onCreateArticleSubmit = async (article) => {

        try {
            const { name, subName, content, articleImage } = article;
            console.log(name, subName, content, articleImage)

            if (!name || !subName || !content || !articleImage) {
                throw new Error('All field are required!')
            }

            const newArticle = await articlesService.create(article);

            setArticles((state) => [...state, newArticle]);

            navigate('/dailyNews')

        } catch (err) {
            alert(err.message);
        }
    }

    const onEditArticleSubmit = async (values) => {

        try {
            const { name, subName, content, articleImage } = values;

            if (!name || !subName || !content || !articleImage) {
                throw new Error('All field are required!')
            }

            const editedArticle = await articlesService.edit(values._id, values);

            setArticles((state) =>
                state.map((x) => (x._id === values._id ? editedArticle : x))
            );

            navigate('/dailyNews');
        } catch (error) {
            alert(error.message);
        }
    }

    const deleteArticle = (articleId) => {
        setArticles((state) => state.filter((article) => article._id !== articleId))
    }

    const contextValues = {
        articles,
        onCreateArticleSubmit,
        onEditArticleSubmit,
        deleteArticle
    }

    return (
        <ArticleContext.Provider value={contextValues}>
            {children}
        </ArticleContext.Provider>
    )
}

export const useArticlesContext = () => {
    const context = useContext(ArticleContext);

    return context;
}
