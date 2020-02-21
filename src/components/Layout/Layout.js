import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,

    }
    sideDrawClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleClicked = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }
    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleClicked} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
};

export default Layout;
