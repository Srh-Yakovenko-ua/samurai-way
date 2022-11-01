import React from 'react';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {
    followAC,
    setCurrentPageAC, setIsFetchingAc, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersType
} from '../../Redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (user: usersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount = () => {
        const {currentPage, pageSize, setUsers, setTotalUsersCount, toggleIsFetching} = this.props;
        toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`, {withCredentials: true})
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


const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootReducerType>(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: setIsFetchingAc,
})(UsersContainer);


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