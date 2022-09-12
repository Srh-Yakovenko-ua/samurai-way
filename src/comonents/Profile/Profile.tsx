import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {changeNewText, PostsType} from '../../state';


type PropsTypeProfile ={
    posts : Array<PostsType>
    addPost: (postMessage: string) => void
    newPostText : string
    changeNewText: (newText : string)=> void
}

export const Profile = (props : PropsTypeProfile) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     changeNewText={changeNewText}/>
        </div>
    );
};

