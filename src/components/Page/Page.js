import React from 'react';
import classes from './Page.css';

const Page = (props) => {
    return (
        <div className={classes.Page}  onClick={props.onClick}>
            <li className={classes.PageLink}>
                {props.value}
            </li>
        </div>
    );
}

export default Page;