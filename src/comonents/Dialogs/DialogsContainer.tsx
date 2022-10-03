import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';


export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {
                const onSendMessageClick = () => {
                    const newMessageText = store.getState().dialogsPage.newMessageText
                    store.dispatch(sendMessageCreator(newMessageText))
                }
                const onChangeMessageBody = (bodyText: string) => {
                    store.dispatch(updateNewMessageBodyCreator(bodyText))
                }

                return (
                    <Dialogs dialogs={store.getState().dialogsPage.dialogs}
                             newMessageText={store.getState().dialogsPage.newMessageText}
                             messages={store.getState().dialogsPage.messages}
                             onSendMessageClick={onSendMessageClick}
                             onChangeMessageBody={onChangeMessageBody}/>
                )
            }}


        </StoreContext.Consumer>

    )


}

