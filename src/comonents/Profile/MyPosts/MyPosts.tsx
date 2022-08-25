import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    return (
        <>
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={'Hi,How are you?'}/>
                <Post message={'It\'s my new post'}/>
            </div>
        </>
    );
};


export default MyPosts;