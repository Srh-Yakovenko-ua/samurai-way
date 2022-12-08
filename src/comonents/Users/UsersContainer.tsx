import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {
    followUserThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC,
    unFollowUserThunkCreator,
    usersType
} from '../../Redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: [] | number[]
}
type mapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount = () => {
        const {currentPage, pageSize, getUsers} = this.props;
        getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {setCurrentPage, pageSize, getUsers} = this.props;
        setCurrentPage(pageNumber)
        getUsers(pageNumber, pageSize)
    }

    followUser = (userID: number) => {
        this.props.followUser(userID)
    }

    unFollowUser = (userID: number) => {
        this.props.unFollowUser(userID)
    }

    render = () => {
        const {totalUsersCount, pageSize, currentPage, users, isFetching, followingInProgress} = this.props;

        return <>
            {isFetching ? <Preloader/> : null}
            <Users pageSize={pageSize}
                   unFollowUser={this.unFollowUser}
                   followUser={this.followUser}
                   users={users}
                   onPageChanged={this.onPageChanged}
                   currentPage={currentPage}
                   followingInProgress={followingInProgress}
                   totalUsersCount={totalUsersCount}/>
        </>
    }
}


const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootReducerType>(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsersThunkCreator,
        followUser: followUserThunkCreator,
        unFollowUser: unFollowUserThunkCreator,
    }),
    WithAuthRedirect
)(UsersContainer)


// const mapDispatchToProps = (dispatch: (action: usersActionType) => void) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: usersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAc(isFetching))
//         }
//     }
// }