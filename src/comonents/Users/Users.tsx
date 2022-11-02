import React from 'react';
import usersPhoto from '../../assets/images/users.png';
import styles from './user.module.css';
import {usersType} from '../../Redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {paginator} from './paginator/paginator';
import {usersApi} from '../../api/usersApi';


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

    const slicedPages = paginator(totalUsersCount, pageSize, currentPage)
    const pagesNumber = slicedPages.map((p, i) => <span key={i} style={{padding: '0 5px', cursor: 'pointer'}}
                                                        onClick={() => onPageChanged(p)}
                                                        className={currentPage === p ? styles.selectedPage : ''}>{p}</span>)

    const followUser = (userID: number) => {
        usersApi.followUser(userID, follow)
    }

    const unFollowUser = (userID: number) => {
        usersApi.unFollowUser(userID, unfollow)
    }

    return (
        <div>
            <div>
                {pagesNumber}
            </div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`profile/${u.id}`}>
                            <img src={u.photos.small !== null ? u.photos.small || u.photos.large : usersPhoto}
                                 className={styles.userPhoto}
                                 alt={'avatar'}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => unFollowUser(u.id)}>unFollow</button> :
                            <button onClick={() => followUser(u.id)}>Follow</button>}
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