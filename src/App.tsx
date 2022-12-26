import React, {ComponentType} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './common/Login/Login';
import {connect} from 'react-redux';
import {authLoginThunkCreator} from './Redux/auth-reducer';
import {RootReducerType} from './Redux/redux-store';
import {compose} from 'redux';
import {initializeAppThunk} from './Redux/app-reducer';
import {Preloader} from './common/Preloader/Preloader';

type MapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToProps = {
    authLogin: () => void
    initializeApp: () => void
}

type AppType = mapDispatchToProps & MapStateToPropsType

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} component={DialogsContainer}/>
                    <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/users'} component={UsersContainer}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/login'} component={Login}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
    }
}


export default compose<ComponentType>(
    withRouter,
    connect<MapStateToPropsType, mapDispatchToProps, {}, RootReducerType>(mapStateToProps,
        {
            authLogin: authLoginThunkCreator,
            initializeApp: initializeAppThunk,
        }),
)(App)






