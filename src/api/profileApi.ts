import {ProfileType} from '../Redux/profile-reducer';
import {instance} from './axios-instance';


export const profileApi = {
    getProfile(userId: string | undefined) {
        return instance
            .get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getProfileStatus(userId: string | undefined) {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateProfileStatus(newStatusText: string) {
        return instance
            .put(`profile/status`, {status: newStatusText} )
    }

}