import React from 'react';
import {usersType} from '../../Redux/users-reducer';
import styles from './user.module.css'
import axios from 'axios';
import usersPhoto from '../../assets/images/users.png'

type UsersPropsType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (user: usersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount = () => {
        const {currentPage, pageSize, setUsers, setTotalUsersCount} = this.props;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items)
                setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (pageNumber: number) => {
        const {pageSize,setUsers} = this.props;
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items)
            });
    }

    render = () => {
        const {
            users,
            follow,
            unfollow,
            pageSize,
            totalUsersCount,
            currentPage,
        } = this.props;

        const pagesCount = Math.ceil(totalUsersCount / pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) pages.push(i)

        const curP = currentPage;
        const curPF = ((curP - 2) < 0) ?  0  : curP - 2 ;
        const curPL = curP + 2;
        const slicedPages = pages.slice( curPF, curPL);


        const pagesNumber = slicedPages.map((p, i) => <span key={i} style={{padding: '0 5px'}} onClick={() => this.onPageChanged(p)}
                                                      className={currentPage === p ? styles.selectedPage : ''}>{p}</span>)

        return (
            <div>
                <div>
                    {pagesNumber}
                </div>
                {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small || u.photos.large : usersPhoto} className={styles.userPhoto}
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
    }
}