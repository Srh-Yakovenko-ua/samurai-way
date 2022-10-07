import React from 'react';
import { usersType} from '../../Redux/users-reducer';
import styles from './user.module.css'

type UsersPropsType = {
    users : usersType[]
}
export const Users : React.FC<UsersPropsType> = (props) => {
    const {users} = props;

    return (
        <div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        <button>Follow</button>
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

