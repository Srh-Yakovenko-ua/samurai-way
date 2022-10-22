import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/Post/MyPostsContainer';
import {ProfileType} from '../../Redux/profile-reducer';


type ProfileTPropsType = {
    profile: ProfileType | null
}

export const  Profile: React.FC<ProfileTPropsType> = (props) => {
    const {profile} = props
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>

        </div>
    );
};

