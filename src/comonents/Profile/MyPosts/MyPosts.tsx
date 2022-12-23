import React from 'react';
import style from './MyPost.module.css'
import Post from './Post/Post';
import {ProfilePageType} from '../../../Redux/profile-reducer';
import {AddPostFormRedux, AddPostFormType} from './AddPostForm';

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: (newPost: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {
        addPost,
        profilePage,
    } = props

    const postsElement = profilePage.posts.map((p) => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />)


    const addNewPost = (formData: AddPostFormType) => addPost(formData.newPost)

    return (
        <>
            <div className={style.postsBlock}>
                <h3>My posts</h3>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </>
    );
};


export default MyPosts;