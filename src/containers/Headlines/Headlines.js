import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import  Headline from '../../components/Headline/Headline';
import classes from './Headlines.css';
import Input from '../../components/RadioButton/RadioButton';

@inject('HeadlinesStore')
@observer
class Headlines extends Component {

    state = {
        radioValue: ''
    }

    componentDidMount(value) {
        this.props.HeadlinesStore.getHeadlines(value);
    }

    inputSubmitHandler = (event) => {
        const value = event.target.value;
        this.componentDidMount(value);
    }

    render() {

        const val = this.props.HeadlinesStore.headlines;

        return (
            <div>
                <form>
                    {
                        this.props.HeadlinesStore.radioValues.map(radio => {
                            return <Input 
                                value={radio.value} 
                                label={radio.value} 
                                name={radio.name} 
                                onChange={this.inputSubmitHandler}
                                />
                        })
                    }
                </form>
                <div className={classes.Headlines}>  
                    {
                        toJS(val).map(item => {
                            return <Headline item={item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Headlines;
