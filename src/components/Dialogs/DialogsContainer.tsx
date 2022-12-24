import React, {ComponentType} from 'react';
import {DialogsPageType, sendMessageAC} from '../../Redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type mapStateToPropsType = {
    dialogsPage: DialogsPageType


}
type mapDispatchToPropsType = {
    onSendMessageClick: (newMessageBody: string) => void
}
export type ownDialogsContainerType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootReducerType>(mapStateToProps, {
        onSendMessageClick: sendMessageAC,
    }),
    WithAuthRedirect,
)(Dialogs)


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