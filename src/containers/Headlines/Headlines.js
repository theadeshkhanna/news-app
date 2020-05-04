import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import  Headline from '../../components/Headline/Headline';
import classes from './Headlines.css';
import Input from '../../components/RadioButton/RadioButton';
import Page from '../../components/Page/Page';

@inject('HeadlinesStore')
@observer
class Headlines extends Component {

    componentDidMount(value) {
        this.props.HeadlinesStore.getHeadlines(value);
    }

    inputSubmitHandler = (event) => {
        const value = event.target.value;
        this.componentDidMount(value);
    }

    render() {

        const val = this.props.HeadlinesStore.headlines;
        const pages = this.props.HeadlinesStore.totalPages;
        const pageValue = [];
                
        for (let i = 0; i < pages; i++) {
            pageValue.push(i+1);
        }

        return (
            <div>
                <h2>Please select a Category to begin with:</h2>
                <form>
                    {
                        this.props.HeadlinesStore.radioValues.map((radio,i) => {
                            return <Input 
                                key={i}
                                value={radio.value} 
                                label={radio.value} 
                                name={radio.name} 
                                onChange={this.inputSubmitHandler} />
                        })
                    }
                </form>
                <div className={classes.Headlines}>  
                    {
                        toJS(val).map((item, i) => {
                            return <Headline item={item} key={i}/>
                        })
                    }
                </div>
                <div>
                    {
                        pageValue.map((val,i) => {
                            return <Page value={val} key={i}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Headlines;
