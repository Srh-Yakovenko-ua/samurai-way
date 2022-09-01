import React from 'react';
import s from './Dialogs.module.css'
import {DialogList} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsType, MessageType} from '../../state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export const Dialogs = (props: PropsType) => {

    const messageElements = props.messages.map((message) => <Message message={message.message}/>)
    const dialogsElements = props.dialogs
        .map((dialog) => <DialogList name={dialog.name} id={dialog.id}/>)


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




