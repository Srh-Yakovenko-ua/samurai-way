import React, {ChangeEvent} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';
import {store, storeType} from '../../Redux/redux-store';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';
import {ActionCreatorAddPost, ActionCreatorChangeText} from '../../Redux/profile-reducer';
import MyPosts from '../Profile/MyPosts/MyPosts';

//type DialogsContainerType = { store: storeType }

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

