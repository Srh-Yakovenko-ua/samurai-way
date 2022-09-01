import React from 'react';
import s from './Dialogs.module.css'
import {DialogList} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ];
    const dialogsElements = dialogs
        .map((dialog) => <DialogList name={dialog.name} id={dialog.id}/>)


    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'IT-LEARN'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},
        {id: 6, message: 'YO'},
    ];
    const messageElements = messages.map(message => <Message message={message.message}/>)


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




