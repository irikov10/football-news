import { requesterFactory } from '../services/requester'

const baseUrl = 'http://localhost:3030/jsonstore/football/'
const request = requesterFactory();

export const getAllArticles = async() => {
    const result = await request.get(baseUrl + "news/");

    return Object.values(result);
}

export const getArticleId = async(articleId) => {
    const result = await request.get(baseUrl + `news/${articleId}`);

    return result
}