import React from 'react';
import classes from './Page.css';

const Page = (props) => {
    return (
        <div className={classes.Page}>
            <li>{props.value}</li>
        </div>
    );
}

export default Page;