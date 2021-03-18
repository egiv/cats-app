import { stringify } from "querystring";
import { BASE_URL } from "./constants";

export const fetchCats = (count, path) => {
    const params = {
        limit: count
    };

    return fetch(`${BASE_URL}${path}?${stringify(params)}`, {
        method: 'GET',
        parameters: {
            limit: count
        }
    })
    .then(checkResponse)
};

const checkResponse = (response) => response.ok ? response.json() : Promise.reject("Ошибка на сервере");
