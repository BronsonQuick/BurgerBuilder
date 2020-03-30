import React, { useState } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';
import { connect } from 'react-redux';

function Layout(props) {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
    
    const sideDrawClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }
    const sideDrawerToggleClicked = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);   
    }
    return (
        <React.Fragment>
            <Toolbar
                drawerToggleClicked={sideDrawerToggleClicked}
                isAuth={props.isAuthenticated} />
            <SideDrawer
                open={sideDrawerIsVisible}
                closed={sideDrawClosedHandler}
                isAuth={props.isAuthenticated} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapStateToProps)(Layout);
