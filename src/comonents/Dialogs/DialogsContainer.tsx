import React from 'react';
import {dialogsReducersActionType, sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';


const mapStateToProps = (state: RootReducerType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText : state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: (action: dialogsReducersActionType) => void) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onChangeMessageBody: (bodyText: string) => {
            dispatch(updateNewMessageBodyCreator(bodyText))
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


//  const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 const onSendMessageClick = () => {
//                     const newMessageText = store.getState().dialogsPage.newMessageText
//                     store.dispatch(sendMessageCreator(newMessageText))
//                 }
//                 const onChangeMessageBody = (bodyText: string) => {
//                     store.dispatch(updateNewMessageBodyCreator(bodyText))
//                 }
//
//                 return (
//                     <Dialogs dialogs={store.getState().dialogsPage.dialogs}
//                              newMessageText={store.getState().dialogsPage.newMessageText}
//                              messages={store.getState().dialogsPage.messages}
//                              onSendMessageClick={onSendMessageClick}
//                              onChangeMessageBody={onChangeMessageBody}/>
//                 )
//             }}
//
//
//         </StoreContext.Consumer>
//
//     )
//
//
// }

