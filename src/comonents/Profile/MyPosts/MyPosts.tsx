import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi,How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my new post', likesCount: 11},
    ];

let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/> )

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
                {postsElement}
            </div>
        </>
    );
};


export default MyPosts;