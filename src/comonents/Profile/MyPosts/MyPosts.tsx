import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>

            </div>
        </>
    );
};


export default MyPosts;