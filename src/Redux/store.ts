import React from 'react';
// import {ActionCreatorAddPost, ActionCreatorChangeText, profileReducers} from './profile-reducer';
// import {dialogsReducers, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
//
// export type MessagesType = {
//     id: number
//     message: string
// }
// export type DialogsType = {
//     id: number
//     name: string
// }
// export type DialogsPageType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessagesType>
//     newMessageText: string
// }
// export type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
// export type ProfilePageType = {
//     posts: Array<PostsType>
//     newPostText: string
// }
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: {}
// }
// export type StoreType = {
//     _state: RootStateType
//     _rerenderTree: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsType) => void
// }
// export type ActionsType = ReturnType<typeof ActionCreatorAddPost>
//     | ReturnType<typeof ActionCreatorChangeText>
//     | ReturnType<typeof sendMessageCreator>
//     | ReturnType<typeof updateNewMessageBodyCreator>


//  const store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: '',
//             posts: [
//                 {id: 1, message: 'Hi,How are you?', likesCount: 12},
//                 {id: 2, message: 'It\'s my new post', likesCount: 11},
//             ],
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'},
//                 {id: 6, name: 'Valera'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'IT-LEARN'},
//                 {id: 3, message: 'YO'},
//                 {id: 4, message: 'YO'},
//                 {id: 5, message: 'YO'},
//                 {id: 6, message: 'YO'},
//             ],
//             newMessageText: ''
//         },
//         sidebar: {}
//     },
//     _rerenderTree() {
//         console.log('change state')
//     },
//     subscribe(observer: () => void) {
//         this._rerenderTree = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducers(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducers(this._state.dialogsPage, action)
//         this._rerenderTree()
//     }
// }







