let renderTree = () => {
    console.log('change state')
}

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        newPostText: '',
        posts: [
            {id: 1, message: 'Hi,How are you?', likesCount: 12},
            {id: 2, message: 'It\'s my new post', likesCount: 11},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'IT-LEARN'},
            {id: 3, message: 'YO'},
            {id: 4, message: 'YO'},
            {id: 5, message: 'YO'},
            {id: 6, message: 'YO'},
        ],
    },

}


export const addPost = (postMessage: string) => {
    const newPost = {id: 3, message: postMessage, likesCount: 0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderTree()
}


export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree()
}

export const subscribe = (observer: () => void) => {
    renderTree = observer
}