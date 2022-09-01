import React from 'react';



export type DialogsType = {
    id: number
    name: string
}

export const dialogs: Array<DialogsType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
];

  export type MessageType = {
    id: number
    message: string
}
export const messages: Array<MessageType> = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'IT-LEARN'},
    {id: 3, message: 'YO'},
    {id: 4, message: 'YO'},
    {id: 5, message: 'YO'},
    {id: 6, message: 'YO'},
];

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export const posts: Array<PostsType> = [
    {id: 1, message: 'Hi,How are you?', likesCount: 12},
    {id: 2, message: 'It\'s my new post', likesCount: 11},
];
