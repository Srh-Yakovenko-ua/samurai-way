import React from 'react';
import {usersType} from '../../Redux/users-reducer';
import styles from './user.module.css'

type UsersPropsType = {
    users: usersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (user: any) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const {users, follow, unfollow, setUsers} = props;
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                photoUrl: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
                followed: false,
                fullName: 'Alexandr',
                status: 'i am a boss',
                location: {city: 'Florida', country: 'USA'}
            },
            {
                id: 2,
                photoUrl: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'i am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
                followed: false,
                fullName: 'Dmitriy',
                status: 'i am a boss too',
                location: {city: 'Augsburg', country: 'Germany'}
            },

        ])
    }

    return (
        <div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => unfollow(u.id)}>unFollow</button> :
                            <button onClick={() => follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

