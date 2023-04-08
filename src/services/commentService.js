import { requesterFactory } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/football/comments';

const request = requesterFactory();

export const getAllComments = async (articleId) => {
    const result = await request.get(`${baseUrl}/${articleId}`);

    return Object.values(result);
}

export const getComment = async (articleId, commentId) => {
    const result = await request.get(`${baseUrl}/${articleId}/${commentId}`);

    return result
}

export const createComment = async (articleId, data) => {

    if (!data.comment || !data.name) {
        alert('Please fill the inputs');
        return
    }

    const result = await request.post(`${baseUrl}/${articleId}`, data);

    return result
}

export const editComment = (articleId, commentId, data) => {
    request.put(`${baseUrl}/${articleId}/${commentId}`, data)
}

export const deleteComment = (articleId, commentId) => {
    request.delete(`${baseUrl}/${articleId}/${commentId}`)
}