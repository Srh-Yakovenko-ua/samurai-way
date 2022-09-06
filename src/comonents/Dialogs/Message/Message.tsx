import s from '../Dialogs.module.css';
import React from 'react';

type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    const newPostElementMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        const textMessage = newPostElementMessage.current?.value
        console.log(textMessage)
    }

    return (
            <div className={s.messages} >{props.message}
                <textarea className={s.textAreaHigh} ref={newPostElementMessage}></textarea>
                <button onClick={addMessage}>+</button>
            </div>
    )
}