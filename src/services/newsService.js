const baseUrl = 'http://localhost:3030/jsonstore/football/'

export const getAllArticles = async() => {
    const response = await fetch(baseUrl + "news/");

    if (response.status === 204) {
        return {}
    }

    const result = await response.json();

    if(!response.ok) {
        throw result
    }

    return Object.values(result);
}

export const getArticleId = async(articleId) => {
    const response = await fetch(baseUrl + `details/${articleId}`);

    if (response.status === 204) {
        return {}
    }

    const result = await response.json();

    if(!response.ok) {
        throw result
    }

    return result
}