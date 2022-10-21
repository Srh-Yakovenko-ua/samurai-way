import React from 'react';
import MyPosts from '../MyPosts';
import {
    AddPostAC,
    ChangeTextAC,
} from '../../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import {RootReducerType} from '../../../../Redux/redux-store';


const mapStateToProps = (state: RootReducerType) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}


export const MyPostsContainer = connect(mapStateToProps, {
    addPost: AddPostAC,
    onPostChange: ChangeTextAC,
})(MyPosts)

// const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 const addPost = () => {
//                     const newPostText = store.getState().profilePage.newPostText
//                     store.dispatch(ActionCreatorAddPost(newPostText))
//                 }
//
//                 const onPostChange = (newTextValue: string) => {
//                     store.dispatch(ActionCreatorChangeText(newTextValue))
//                 }
//
//                 return (
//                     <MyPosts addPost={addPost}
//                              newPostText={store.getState().profilePage.newPostText}
//                              onPostChange={onPostChange}
//                              posts={store.getState().profilePage.posts}/>
//                 )
//             }}
//         </StoreContext.Consumer>
//     );
// };
//
//
// export default MyPostsContainer;


// const mapDispatchToProps = (dispatch: (action: ProfileReducerActionType) => void) => {
//     return {
//         addPost: () => {
//             dispatch(ActionCreatorAddPost())
//         },
//         onPostChange: (newTextValue: string) => {
//             dispatch(ActionCreatorChangeText(newTextValue))
//         },
//     }
// }
//