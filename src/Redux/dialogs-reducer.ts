import {nanoid} from 'nanoid';

export type dialogsReducersActionType =
    | ReturnType<typeof sendMessageAC>

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}


const SEND_MESSAGE = 'SEND_MESSAGE'
const initialState = {
    dialogs: [
        {id: nanoid(), name: 'Dimych'},
        {id: nanoid(), name: 'Andrey'},
        {id: nanoid(), name: 'Sveta'},
        {id: nanoid(), name: 'Sasha'},
        {id: nanoid(), name: 'Viktor'},
        {id: nanoid(), name: 'Valera'},
    ],
    messages: [
        {id: nanoid(), message: 'Hello'},
        {id: nanoid(), message: 'IT-LEARN'},
        {id: nanoid(), message: 'YO'},
        {id: nanoid(), message: 'YO'},
        {id: nanoid(), message: 'YO'},
        {id: nanoid(), message: 'YO'},
    ],

}

export const sendMessageAC = (newMessageBody : string) => ({
        type: SEND_MESSAGE,
        newMessageBody
    } as const
)



export const dialogsReducers = (state: DialogsPageType = initialState, action: dialogsReducersActionType): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessages = {id: nanoid(), message: action.newMessageBody}
            return {...state, messages: [...state.messages, newMessages]}
        default : {
            return state
        }
    }
}