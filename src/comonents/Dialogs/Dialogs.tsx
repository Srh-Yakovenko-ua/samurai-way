import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogList} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {ActionsType, DialogsType, MessagesType,} from '../../Redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<PropsType> = (props) => {
    const {dialogs, messages, newMessageText, dispatch} = props;

    const messageElements = messages.map((message) => <Message key={message.id}
                                                               message={message.message}/>)

    const dialogsElements = dialogs.map((dialog) => <DialogList key={dialog.id}
                                                                name={dialog.name}
                                                                id={dialog.id}/>)


    const onSendMessageClick = () => {
        dispatch(sendMessageCreator(newMessageText))
    }
    const onChangeNewMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const bodyText = e.currentTarget.value
        dispatch(updateNewMessageBodyCreator(bodyText))
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>{messageElements}
                    <div>
                        <div><textarea placeholder={'Enter your message'}
                                       onChange={onChangeNewMessageBody}
                                       value={newMessageText}></textarea></div>
                        <div onClick={onSendMessageClick}>Send</div>
                    </div>
                </div>

            </div>

        </div>
    );
};




