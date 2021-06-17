import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//Redux
import { Provider } from "react-redux";
import store from "./store/configurestore";

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
