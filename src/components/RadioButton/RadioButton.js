import React from 'react';
import classes from './RadioButton.css';

const RadioButton = (props) => {
    return (
        <div className={classes.RadioButton}>
            <input 
                type="radio" 
                name="category"
                value={props.value} 
                onChange={props.onChange}/>
            <label 
                for={props.label}>
                {props.name}
            </label>
        </div>
    );
}

export default RadioButton;