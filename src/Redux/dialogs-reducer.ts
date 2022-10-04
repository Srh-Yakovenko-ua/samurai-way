export type dialogsReducersActionType =
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
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
    newMessageText: string
}

const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const initialState = {
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
    newMessageText: ''
}


// export const sendMessageCreator = (newMessageText: string) => ({
//         type: SEND_MESSAGE,
//         newMessageTextBody: newMessageText
//     } as const
// )
export const sendMessageCreator = () => ({
        type: SEND_MESSAGE
    } as const
)
export const updateNewMessageBodyCreator = (bodyText: string) => ({
        type: NEW_MESSAGE_TEXT,
        body: bodyText
    } as const
)


export const dialogsReducers = (state: DialogsPageType = initialState, action: dialogsReducersActionType): DialogsPageType => {

    switch (action.type) {
        case NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            const newMessages = {id: 7, message: state.newMessageText}
            state.messages.push(newMessages)
            state.newMessageText = '';
            return state
        default : {
            return state
        }
    }
}