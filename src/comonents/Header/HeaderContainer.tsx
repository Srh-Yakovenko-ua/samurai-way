import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserDataAC} from '../../Redux/auth-reducer';
import {RootReducerType} from '../../Redux/redux-store';

type mapStateToProps = {}
type mapDispatchToProps = {}
type HeaderContainerType = {}


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
                withCredentials: true
            })
            .then(response => {
                debugger
            });
    }


    render = () => {
        return (
            <Header/>
        );
    }
}

const mapStateToProps = (state: RootReducerType): mapStateToProps => {
    return {}
}

export default connect<mapStateToProps, mapDispatchToProps, {}, RootReducerType>(mapStateToProps, {
    setUserDataAC,
})(HeaderContainer);