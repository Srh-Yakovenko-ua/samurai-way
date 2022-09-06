import React, { useState} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (addChangeTextArea: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)
    const [addTextArea, setAddTextArea] = useState('')

    const onChangeTextAreaHandler = (value: string) => {
        setAddTextArea(value)
    }

    const addPost = () => {
        props.addPost(addTextArea)
        setAddTextArea('')
    }

    return (
        <>
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea onChange={(e) => onChangeTextAreaHandler(e.currentTarget.value)} value={addTextArea}></textarea>
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