import React, {ChangeEvent} from 'react';
import style from './MyPost.module.css'
import Post from './Post/Post';
import {ProfilePageType} from '../../../Redux/profile-reducer';

type MyPostsPropsType = {
    profilePage: ProfilePageType
    newPostText : string
    addPost: () => void
    onPostChange: (newTextValue: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {onPostChange, addPost, profilePage,newPostText} = props

    const postsElement = profilePage.posts.map((p) => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />)

    const onAddPost = () => {
        addPost()
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newTextValue = e.currentTarget.value
        onPostChange(newTextValue)
    }


    return (
        <>
            <div className={style.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea onChange={onChangeTextAreaHandler}
                                  value={newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </>
    );
};


export default MyPosts;