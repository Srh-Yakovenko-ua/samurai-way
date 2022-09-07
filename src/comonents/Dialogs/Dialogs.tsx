import React from 'react';
import s from './Dialogs.module.css'
import {DialogList} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: PropsType) => {

    const messageElements = props.messages
        .map((message) => <Message
            key={message.id}
            message={message.message}
        />)

    const dialogsElements = props.dialogs
        .map((dialog) => <DialogList
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
        />)


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>

        </div>
    );
};




