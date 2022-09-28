import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, PostsType} from '../../Redux/state';


type PropsTypeProfile = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void

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

