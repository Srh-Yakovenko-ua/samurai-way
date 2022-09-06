import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';

type MyPostsPropsType = {
    posts: Array<PostsType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement= React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
       const text = newPostElement.current?.value
        console.log(text)
    }

    return (
        <>
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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