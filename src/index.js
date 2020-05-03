import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import HeadlinesStore from './stores/HeadlinesStore';
import EverythingStore from './stores/EverythingStore';

const root = (
    <Provider 
        HeadlinesStore={HeadlinesStore} 
        EverythingStore={EverythingStore}>
        <App />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
