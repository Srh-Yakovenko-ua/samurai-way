import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';

export const Profile = () => {
    return (
        <div >

            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="1"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>

        </div>
    );
};

