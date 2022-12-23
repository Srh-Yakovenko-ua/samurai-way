import React from 'react';
import style from './Dialogs.module.css'
import {DialogList} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {ownDialogsContainerType} from './DialogsContainer';
import {AddMessageFormRedux, AddMessageFormType} from './AddMessageForm';


export const Dialogs: React.FC<ownDialogsContainerType> = (props) => {
    const {
        dialogsPage,
        onSendMessageClick,
    } = props;

    const messageElements = dialogsPage.messages.map((message) => <Message key={message.id}
                                                                           message={message.message}/>)

    const dialogsElements = dialogsPage.dialogs.map((dialog) => <DialogList key={dialog.id}
                                                                            name={dialog.name}
                                                                            id={dialog.id}/>)

    const addNewMessage = (formData: AddMessageFormType) => onSendMessageClick(formData.newMessageBody)


    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messageElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};




