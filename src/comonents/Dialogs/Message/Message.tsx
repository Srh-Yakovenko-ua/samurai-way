import s from '../Dialogs.module.css';
import React from 'react';

type MessageType = { message: string }

export const Message: React.FC<MessageType> = (props) => {
    const {message} = props

    return (
        <div className={s.messages}>{message}</div>
    )
}