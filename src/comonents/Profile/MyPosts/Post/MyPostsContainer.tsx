import React from 'react';
import MyPosts from '../MyPosts';
import {store, storeType} from '../../../../Redux/redux-store';
import {ActionCreatorAddPost, ActionCreatorChangeText} from '../../../../Redux/profile-reducer';
import {StoreContext} from '../../../../StoreContext';

// type MyPostsPropsContainerType = {
//     store: storeType
// }

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {
                const addPost = () => {
                    const newPostText = store.getState().profilePage.newPostText
                    store.dispatch(ActionCreatorAddPost(newPostText))
                }

                const onPostChange = (newTextValue: string) => {
                    store.dispatch(ActionCreatorChangeText(newTextValue))
                }

                return (
                    <MyPosts addPost={addPost}
                             newPostText={store.getState().profilePage.newPostText}
                             onPostChange={onPostChange}
                             posts={store.getState().profilePage.posts}/>
                )
            }}

        </StoreContext.Consumer>
    );
};


export default MyPostsContainer;