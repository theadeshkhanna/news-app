import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import classes from './Everything.css';
import Headline from '../../components/Headline/Headline';

@inject('EverythingStore')
@observer
class Everything extends Component {

    inputSubmitHandler = (event) => {
        event.preventDefault();
        this.props.EverythingStore.getEverything(this.news.value);
        this.news.value = '';
    }

    render() {

        const val = this.props.EverythingStore.everything;

        return (
            
            <div>
                <form onSubmit={(event) => this.inputSubmitHandler(event)}>
                    <input 
                        className={classes.Input}
                        type="text" 
                        ref={input => this.news = input} 
                        placeholder="Enter any keyword" />
                    <br />    
                    <button>GO</button>    
                </form> 
                <div className={classes.Everything}>
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

export default Everything;