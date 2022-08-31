import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ];
    const dialogsElements = dialogsData
        .map((dialog) => <DialogList name={dialog.name} id={dialog.id}/>)


    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'IT-LEARN'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},
        {id: 6, message: 'YO'},
    ];
    const messageElements = messagesData.map(message => <Message message={message.message}/>)


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


type DialogListType = {
    id: number
    name: string
}

const DialogList = (props: DialogListType) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}