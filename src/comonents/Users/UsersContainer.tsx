import React from 'react';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {
    followAC,
    setCurrentPageAC, setIsFetchingAc, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersActionType,
    usersType
} from '../../Redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import preloader from './../../assets/images/preloader.svg'
import {Preloader} from '../common/Preloader/Preloader';

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
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount = () => {
        const {currentPage, pageSize, setUsers, setTotalUsersCount, toggleIsFetching} = this.props;

        toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false)
                setUsers(response.data.items)
                setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (pageNumber: number) => {
        const {pageSize, setUsers, setCurrentPage, toggleIsFetching} = this.props;
        setCurrentPage(pageNumber)
        toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items)
                toggleIsFetching(false)
            });
    }

    render = () => {
        const {totalUsersCount, pageSize, currentPage, users, follow, unfollow, isFetching} = this.props;


        return <>
            {isFetching ? <Preloader/> : null}
            <Users pageSize={pageSize}
                   unfollow={unfollow}
                   follow={follow}
                   users={users}
                   onPageChanged={this.onPageChanged}
                   currentPage={currentPage}
                   totalUsersCount={totalUsersCount}/>
        </>

    }
}


const mapStateToProps = (state: RootReducerType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAc(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);