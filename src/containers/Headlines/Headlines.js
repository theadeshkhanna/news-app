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

    state = {
        activeCategory: ''
    }

    componentDidMount(value, pageValue) {
        this.props.HeadlinesStore.getHeadlines(value, pageValue);
    }

    inputSubmitHandler = (event) => {
        const value = event.target.value;
        this.setState({
            activeCategory: value
        });
        this.componentDidMount(value);
    }

    pageClickHandler = (pageValue) => {
        const category = this.state.activeCategory;
        this.componentDidMount(category, pageValue);
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
                <h2 className={classes.Head}>Please select a Category to begin with:</h2>
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
                <div className={classes.Footer}>
                    {
                        pageValue.map((val,i) => {
                            return <Page 
                                value={val} 
                                key={i} 
                                onClick={(event) => this.pageClickHandler(val)} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Headlines;
