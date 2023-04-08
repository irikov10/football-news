import { requesterFactory } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/football/'
const request = requesterFactory();

export const getAllFootballers = async () => {
    const result = await request.get(baseUrl + "transfers/");

    return Object.values(result);
}

export const getPlayer = async (playerId) => {
    const result = await request.get(baseUrl + `transfers/${playerId}`);

    return result
}