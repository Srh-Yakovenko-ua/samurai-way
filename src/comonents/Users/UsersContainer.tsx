import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootReducerType} from '../../Redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unfollowAC,
    usersActionType,
    usersType
} from '../../Redux/users-reducer';


const mapStateToProps = (state: RootReducerType) => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage
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
        setCurrentPage : (currentPage : number)=> {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);