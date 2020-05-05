import React from 'react';
import classes from './Headline.css';

const Headline = (props) => {
        return (
            <div className={classes.Headline}>
                <h3>{props.item.title}</h3>
                <img src={props.item.urlToImage} alt={props.item.title}/>
                <br />
                <br />
                <a className={classes.Read} href={props.item.url}>READ MORE</a>
            </div>
        );
}

export default Headline;