import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogList} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../Redux/dialogs-reducer';



type PropsType = {
    dialogPage : DialogsPageType
    onSendMessageClick: () => void
    onChangeMessageBody: (bodyText: string) => void
}

export const Dialogs: React.FC<PropsType> = (props) => {
    // const dialogs = useSelector<RootReducerType, DialogsType[]>(state => state.dialogsPage.dialogs)

    const {dialogPage, onSendMessageClick, onChangeMessageBody} = props

    const messageElements = dialogPage.messages.map((message) => <Message key={message.id}
                                                               message={message.message}/>)

    const dialogsElements = dialogPage.dialogs.map((dialog) => <DialogList key={dialog.id}
                                                                name={dialog.name}
                                                                id={dialog.id}/>)


    const onSendNewMessageClick = () => onSendMessageClick()

    const onChangeNewMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const bodyText = e.currentTarget.value
        onChangeMessageBody(bodyText)
    }
const newMessageText = dialogPage.newMessageText;
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messageElements}
                    <div>
                        <div><textarea placeholder={'Enter your message'}
                                       onChange={onChangeNewMessageBody}
                                       value={newMessageText}></textarea>
                        </div>
                        <div onClick={onSendNewMessageClick}>Send</div>
                    </div>
                </div>

            </div>

        </div>
    );
};




