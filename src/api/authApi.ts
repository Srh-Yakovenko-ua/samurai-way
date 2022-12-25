import {instance} from './axios-instance';

export const authApi = {
    setUserData() {
        return instance
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha?: boolean) {
        return instance
            .post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance
            .delete(`auth/login`)
    }
}


