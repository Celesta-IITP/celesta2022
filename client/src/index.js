import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'; 
import * as serviceWorker from './serviceWorker';
import App from './app';
import store from './store';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

