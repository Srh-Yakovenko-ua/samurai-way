import {instance} from './axios-instance';

export const authApi = {
    setUserData() {
        return instance
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }
}


