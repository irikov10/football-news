import { requesterFactory } from '../services/requester'

const baseUrl = 'http://localhost:3030/jsonstore/football/'

export const articlesServiceFactory = (token) => {
    const request = requesterFactory(token);

    const getAllArticles = async () => {
        const result = await request.get(baseUrl + "news/");

        return Object.values(result);
    }

    const getArticle = async (articleId) => {
        const result = await request.get(baseUrl + `news/${articleId}`);

        return result
    }

    const create = async (articleData) => {
        const result = await request.post(baseUrl + `news/`, articleData);

        return result
    }

    const edit = (articleId, data) => {
        request.put(`${baseUrl}/news/${articleId}`, data);
    }

    const deleteArticle = (articleId) => {
        request.delete(`${baseUrl}/news/${articleId}`);
    }

    return {
        getAllArticles,
        getArticle,
        create,
        edit,
        delete: deleteArticle,
    }
}
