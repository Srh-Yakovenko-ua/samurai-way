import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';


const MyPosts = (props : any) => {


let postsElement = props.posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message} likesCount={p.likesCount}/> )

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