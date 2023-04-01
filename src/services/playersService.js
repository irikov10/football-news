const baseUrl = 'http://localhost:3030/jsonstore/football/'

export const getAllFootballers = async() => {
    const response = await fetch(baseUrl + "transfers/");

    if (response === 204) {
        return {}
    }

    const result = await response.json();

    if(!response.ok) {
        throw result;
    }

    return Object.values(result);
}

export const getPlayerId = async(playerId) => {
    const response = await fetch(baseUrl + `details/${playerId}`);

    if (response === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        return result;
    }

    return result
}