import {instance} from './axios-instance';


export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {

        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(userID: number, unfollow: (userID: number) => void, toggleFollowingProgress: (isFetching: boolean, userID: number) => void) {
        toggleFollowingProgress(true, userID)

        instance
            .delete(`follow/${userID}`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    unfollow(userID)
                    toggleFollowingProgress(false, userID)
                }
            })
    },
    followUser(userID: number, follow: (userID: number) => void, toggleFollowingProgress: (isFetching: boolean, userID: number) => void) {
        toggleFollowingProgress(true, userID)

        instance
            .post(`/follow/${userID}`, {})
            .then(response => {
                if (response.data.resultCode === 0) {
                    follow(userID)
                    toggleFollowingProgress(false, userID)
                }
            })
    }
}

