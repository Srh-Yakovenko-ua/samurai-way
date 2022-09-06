import React, { useState} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (e: any) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)
    const [addChangeTextArea, setAddChangeTextArea] = useState('')

    const onChangeTextAreaHandler = (value: string) => {
        setAddChangeTextArea(value)
    }

    const addPost = () => {
        props.addPost(addChangeTextArea)
    }

    return (
        <>
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea onChange={(e) => onChangeTextAreaHandler(e.currentTarget.value)}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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