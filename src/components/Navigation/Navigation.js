import React from 'react';
import classes from './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <ul>
                <li><Link className={classes.Link} to="/">Headlines</Link></li>
                <li><Link className={classes.Link} to="/everything">Everything</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;