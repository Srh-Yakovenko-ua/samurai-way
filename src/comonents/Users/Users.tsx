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
}
// export const Users: React.FC<UsersPropsType> = (props) => {
//         const {users, follow, unfollow, setUsers} = props;
//
//         let getUsers = () => {
//             if (users.length === 0) {
//                 axios
//                     .get('https://social-network.samuraijs.com/api/1.0/users')
//                     .then(response => {
//                         setUsers(response.data.items)
//                     })
//             }
//         }
//
//
//         return (
//             <div>
//                 <button onClick={getUsers}>Get Users</button>
//                 {users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}
//                              alt={'avatar'}/>
//                     </div>
//                     <div>
//                         {u.followed ? <button onClick={() => unfollow(u.id)}>unFollow</button> :
//                             <button onClick={() => follow(u.id)}>Follow</button>}
//                     </div>
//                 </span>
//                     <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{'u.location.country'}</div>
//                         <div>{'u.location.city'}</div>
//                     </span>
//                 </span>
//                 </div>)}
//             </div>
//         );
//     }
// ;
//
export class Users extends React.Component<UsersPropsType> {

    componentDidMount = () => {
        const {currentPage, pageSize} = this.props;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }
    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
        const pagesNumber = pages.map(p => <span onClick={() => this.onPageChanged(p)}
                                                 className={currentPage === p ? styles.selectedPage : ''}>{p}</span>)

        return (
            <div>
                <div>
                    {pagesNumber}
                </div>
                {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}
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