import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
            .then(response => response.data)
    },

}

