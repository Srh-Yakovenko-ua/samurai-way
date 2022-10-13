import React from 'react';
import {usersType} from '../../Redux/users-reducer';
import styles from './user.module.css'
import axios from 'axios';
import usersPhoto from '../../assets/images/users.png'

type UsersPropsType = {
    users: usersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (user: usersType[]) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const {users, follow, unfollow, setUsers} = props;
    if (users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })
    }
        //     setUsers([
        //         {
        //             id: 1,
        //             photoUrl: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
        //             followed: false,
        //             fullName: 'Alexandr',
        //             status: 'i am a boss',
        //             location: {city: 'Florida', country: 'USA'}
        //         },
        //         {
        //             id: 2,
        //             photoUrl: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
        //             followed: false,
        //             fullName: 'Andrew',
        //             status: 'i am a boss',
        //             location: {city: 'Kiev', country: 'Ukraine'}
        //         },
        //         {
        //             id: 3,
        //             photoUrl: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
        //             followed: false,
        //             fullName: 'Dmitriy',
        //             status: 'i am a boss too',
        //             location: {city: 'Augsburg', country: 'Germany'}
        //         },
        //
        //     ])
        // }

        return (
            <div>
                {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto} alt={'avatar'}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => unfollow(u.id)}>unFollow</button> :
                            <button onClick={() => follow(u.id)}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)}
            </div>
        );
    }
    ;

