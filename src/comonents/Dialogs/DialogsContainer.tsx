import React, {ChangeEvent} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';
import {store, storeType} from '../../Redux/redux-store';
import {Dialogs} from './Dialogs';

type DialogsContainerType = { store: storeType }

export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {
    const state = store.getState();

    const onSendMessageClick = () => {
        const newMessageText = state.dialogsPage.newMessageText
        store.dispatch(sendMessageCreator(newMessageText))
    }
    const onChangeMessageBody = (bodyText: string) => store.dispatch(updateNewMessageBodyCreator(bodyText))


    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 newMessageText={state.dialogsPage.newMessageText}
                 messages={state.dialogsPage.messages}
                 onSendMessageClick={onSendMessageClick}
                 onChangeMessageBody={onChangeMessageBody}
        />
    );
};
