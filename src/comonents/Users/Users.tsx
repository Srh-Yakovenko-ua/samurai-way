import React from 'react';
import usersPhoto from '../../assets/images/users.png';
import styles from './user.module.css';
import {usersType} from '../../Redux/users-reducer';


type UsersPropsType = {
    users: usersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
    const {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        users,
        unfollow,
        follow
    } = props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i)

    const curP = currentPage;
    const curPF = ((curP - 2) < 0) ? 0 : curP - 2;
    const curPL = curP + 2;
    const slicedPages = pages.slice(curPF, curPL);


    const pagesNumber = slicedPages.map((p, i) => <span key={i} style={{padding: '0 5px', cursor: 'pointer'}}
                                                        onClick={() => onPageChanged(p)}
                                                        className={currentPage === p ? styles.selectedPage : ''}>{p}</span>)


    return (
        <div>
            <div>
                {pagesNumber}
            </div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small || u.photos.large : usersPhoto}
                             className={styles.userPhoto}
                             alt={'avatar'}/>
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
};

export {Users};