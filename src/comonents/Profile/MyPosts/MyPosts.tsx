import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {ActionsType, PostsType} from '../../../state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsPropsType) => {


    const postsElement = props.posts.map((p) => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />)

    const addPost = () => {
        props.dispatch({type: 'ADD-POST', postMessage: props.newPostText})
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        props.dispatch({type: 'CHANGE-NEW-TEXT', newText: value})
    }


    return (
        <>
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea onChange={onChangeTextAreaHandler}
                                  value={props.newPostText}/>
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