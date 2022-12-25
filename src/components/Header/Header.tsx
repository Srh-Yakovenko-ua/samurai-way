import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    authLogout : () => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    const {isAuth, login , authLogout} = props;


    return (
        <header className={style.header}>
            <img
                src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
                alt="1"/>


            <div className={style.loginBlock}>
                {isAuth ?
                    <div>
                        <div>{login}</div>
                        <button className={style.logout} onClick={authLogout}>logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );
};
