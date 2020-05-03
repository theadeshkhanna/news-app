import React, { Component } from 'react';
import classes from './Headline.css';

class Headline extends Component {
    render() {
        return (
            <div className={classes.Headline}>
                <h3>{this.props.item.title}</h3>
                <img src={this.props.item.urlToImage}/>
                <br />
                <br />
                <a href={this.props.item.url}>READ MORE</a>
            </div>
        );
    }
}

export default Headline;