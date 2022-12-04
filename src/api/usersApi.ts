import {instance} from './axios-instance';


export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(userID: number) {
        return instance
            .delete(`follow/${userID}`)
    },
    followUser(userID: number) {
        return instance
            .post(`/follow/${userID}`, {})
    }
}

