import React from 'react';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersActionType,
    usersType
} from '../../Redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';

type UsersContainerType = {
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

class UsersContainer extends React.Component<UsersContainerType> {

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


const mapStateToProps = (state: RootReducerType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: (action: usersActionType) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);