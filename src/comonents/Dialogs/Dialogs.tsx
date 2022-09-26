import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogList} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType, sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    dispatch : (action : any)=> void
}

export const Dialogs = (props: PropsType) => {

    const messageElements = props.messages.map((message) => <Message key={message.id}
                                                                     message={message.message}/>)

    const dialogsElements = props.dialogs.map((dialog) => <DialogList key={dialog.id}
                                                                      name={dialog.name}
                                                                      id={dialog.id}/>)


    const onSendMessageClick = () => {
        const newMessageText = props.newMessageText
        props.dispatch(sendMessageCreator(newMessageText))
    }
    const onChangeNewMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const bodyText = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(bodyText))
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>{messageElements}</div>
                <div>
                    <div><textarea placeholder={'Enter your message'}
                                   onChange={onChangeNewMessageBody}
                                   value={props.newMessageText}></textarea></div>
                    <div onClick={onSendMessageClick}>Send</div>
                </div>
            </div>

        </div>
    );
};




