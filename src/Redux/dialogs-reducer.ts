import {ActionsType, DialogsPageType} from './state';

const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


export const dialogsReducers = (state: DialogsPageType, action: ActionsType) => {

    switch (action.type) {
        case NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            const newMessages = {id: 7, message: action.newMessageTextBody}
            state.messages.push(newMessages)
            state.newMessageText = '';
            return state
        default : {
            return state
        }
    }
}