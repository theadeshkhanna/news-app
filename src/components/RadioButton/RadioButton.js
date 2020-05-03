import React from 'react';

const RadioButton = (props) => {
    return (
        <div>
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