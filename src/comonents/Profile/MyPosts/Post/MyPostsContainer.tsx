import React from 'react';
import MyPosts from '../MyPosts';
import {store, storeType} from '../../../../Redux/redux-store';
import {ActionCreatorAddPost, ActionCreatorChangeText} from '../../../../Redux/profile-reducer';

type MyPostsPropsContainerType = {
    store: storeType
}

const MyPostsContainer: React.FC<MyPostsPropsContainerType> = (props) => {
    const state = store.getState()


    const addPost = () => {
        const newPostText = state.profilePage.newPostText
        store.dispatch(ActionCreatorAddPost(newPostText))
    }

    const onPostChange = (newTextValue: string) => {
        store.dispatch(ActionCreatorChangeText(newTextValue))
    }


    return (
        <MyPosts addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 onPostChange={onPostChange}
                 posts={state.profilePage.posts}/>
    );
};


export default MyPostsContainer;