import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div>

            <div className={s.dialogs}>
                <div className={s.dialogsList}>
                    <DialogList name={'Dimych'} id={'1'}/>
                    <DialogList name={'Andrey'} id={'2'}/>
                    <DialogList name={'Sveta'} id={'3'}/>
                    <DialogList name={'Sasha'} id={'4'}/>
                    <DialogList name={'Viktor'} id={'5'}/>
                    <DialogList name={'Valera'} id={'6'}/>
                </div>

                <div className={s.messages}>
                    <Message message={'Hello'}/>
                    <Message message={'IT-LEARN'}/>
                    <Message message={'YO'}/>
                </div>
            </div>

        </div>
    );
};


type DialogListType ={
    id : string
    name : string
}
const DialogList =  (props : DialogListType) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

type MessageType ={
    message : string
}
const Message = (props : MessageType) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}