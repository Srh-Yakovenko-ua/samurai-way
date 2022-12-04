import {ProfileType} from '../Redux/profile-reducer';
import {instance} from './axios-instance';


export const profileApi = {
    getProfile(userId: string | undefined) {
        return instance
            .get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    }
}