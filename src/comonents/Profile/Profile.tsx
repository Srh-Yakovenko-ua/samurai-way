import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, PostsType} from '../../state';


type PropsTypeProfile = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void

}

export const Profile = (props: PropsTypeProfile) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>

        </div>
    );
};

