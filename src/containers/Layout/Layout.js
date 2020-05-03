import React, { Component } from 'react';
import classes from './Layout.css';
import Headlines from '../Headlines/Headlines';
import Navigation from '../../components/Navigation/Navigation';
import Everything from '../../containers/Everything/Everything';
import { Route, Switch } from 'react-router-dom';

class Layout extends Component {  
    render() {
        return (
            <div className={classes.Layout}>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Headlines} />
                    <Route path="/everything" exact component={Everything}/>
                </Switch>
            </div>
        );
    }
}

export default Layout;