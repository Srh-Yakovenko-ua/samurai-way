import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/Post/MyPostsContainer';
import {ProfileType} from '../../Redux/profile-reducer';


type ProfileTPropsType = {
    profile: ProfileType | null
    status: string
    updateProfileStatus: (newStatus: string) => void
}

export const Profile: React.FC<ProfileTPropsType> = (props) => {
    const {profile, status, updateProfileStatus} = props
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateProfileStatus={updateProfileStatus}
            />
            <MyPostsContainer/>

        </div>
    );
};

