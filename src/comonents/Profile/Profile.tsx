import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType, ProfileReducerActionType} from '../../Redux/profile-reducer';


type PropsTypeProfile = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ProfileReducerActionType) => void
}

export const Profile: React.FC<PropsTypeProfile> = (props) => {
    const {posts, newPostText, dispatch} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     dispatch={dispatch}/>

        </div>
    );
};

