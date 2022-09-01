import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

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


type DialogListType = {
    id: number
    name: string
}

const DialogList = (props: DialogListType) => {
const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialogsList + ' ' + s.active}>
            <NavLink className={s.color} activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    );
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}