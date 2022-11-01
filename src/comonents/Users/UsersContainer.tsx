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
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersApi} from '../../api/api';


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

        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                toggleIsFetching(false)
                setUsers(data.items)
                setTotalUsersCount(data.totalCount)
            });
    }
    onPageChanged = (pageNumber: number) => {
        const {pageSize, setUsers, setCurrentPage, toggleIsFetching} = this.props;
        setCurrentPage(pageNumber)
        toggleIsFetching(true)

        usersApi.getUsers(pageNumber, pageSize)
            .then(data => {
                setUsers(data.items)
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