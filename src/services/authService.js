import { requesterFactory } from "./requester";

const url = `http://localhost:3030/users`;

export const authServiceFactory = (token) => {
    const request = requesterFactory(token)

    return {
        login: (data) => request.post(`${url}/login`, data),
        register: (data) => request.post(`${url}/register`, data),
        logout: () => request.get(`${url}/logout`)
    }
}