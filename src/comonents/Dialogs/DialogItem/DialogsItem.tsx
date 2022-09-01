import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';


type DialogListType = {
    id: number
    name: string
}

export const DialogList = (props: DialogListType) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialogsList + ' ' + s.active}>
            <NavLink className={s.color} activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    );
}