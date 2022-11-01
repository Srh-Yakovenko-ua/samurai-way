import {instance} from './axios-instance';


export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
            .then(response => response.data)
    },

}


