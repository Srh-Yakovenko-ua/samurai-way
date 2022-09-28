import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {ActionsType, PostsType} from '../../../Redux/store';
import {ActionCreatorAddPost, ActionCreatorChangeText} from '../../../Redux/profile-reducer';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts, newPostText, dispatch} = props

    const postsElement = posts.map((p) => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />)

    const addPost = () => {
        dispatch(ActionCreatorAddPost(newPostText))
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newTextValue = e.currentTarget.value
        dispatch(ActionCreatorChangeText(newTextValue))
    }


    return (
        <>
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea onChange={onChangeTextAreaHandler}
                                  value={newPostText}/>
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