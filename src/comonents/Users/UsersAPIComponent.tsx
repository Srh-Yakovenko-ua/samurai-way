import React from 'react';
import {usersType} from '../../Redux/users-reducer';
import styles from './user.module.css'
import axios from 'axios';
import usersPhoto from '../../assets/images/users.png'
import {Users} from './Users';

type UsersAPIComponentType = {
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

export class UsersAPIComponent extends React.Component<UsersAPIComponentType> {

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
        const {pageSize, setUsers, setCurrentPage} = this.props;
        setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items)
            });
    }

    render = () => {
        const {totalUsersCount, pageSize, currentPage, users, follow, unfollow} = this.props;

        return <Users pageSize={pageSize}
                      unfollow={unfollow}
                      follow={follow}
                      users={users}
                      onPageChanged={this.onPageChanged}
                      currentPage={currentPage}
                      totalUsersCount={totalUsersCount}/>

    }
}