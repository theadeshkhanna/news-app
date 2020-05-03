import React, { Component } from 'react';
import classes from './Headline.css';

const Headline = (props) => {
        return (
            <div className={classes.Headline}>
                <h3>{props.item.title}</h3>
                <img src={props.item.urlToImage} />
                <br />
                <br />
                <a href={props.item.url}>READ MORE</a>
            </div>
        );
}

export default Headline;