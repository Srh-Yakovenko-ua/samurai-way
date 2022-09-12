import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (addChangeTextArea: string) => void
    newPostText: string
    changeNewText: (newText: string) => void

}

const MyPosts = (props: MyPostsPropsType) => {


    const postsElement = props.posts.map((p) => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />)


    const addPost = () => {
        props.addPost(props.newPostText)
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
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