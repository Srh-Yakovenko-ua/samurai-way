import React from 'react';
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
}
type mapDispatchToPropsType = {
    onSendMessageClick: () => void
    onChangeMessageBody: (bodyText: string) => void
}


const mapStateToProps = (state: RootReducerType) : mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

export const DialogsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootReducerType>(mapStateToProps, {
    onSendMessageClick: sendMessageAC,
    onChangeMessageBody: updateNewMessageBodyAC,
})(Dialogs);


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

// const mapDispatchToProps = (dispatch: (action: dialogsReducersActionType) => void) => {
//     return {
//         onSendMessageClick: () => {
//             dispatch(sendMessageCreator())
//         },
//         onChangeMessageBody: (bodyText: string) => {
//             dispatch(updateNewMessageBodyCreator(bodyText))
//         },
//     }
// }