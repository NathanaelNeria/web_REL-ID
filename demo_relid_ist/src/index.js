import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";
import BasicLayouts from './layout';

// import Route from "./router";

import "./helpers/Axios/interceptor";
import './index.css';

ReactDOM.render(<BrowserRouter>
    <Route component={(props) =>
        <BasicLayouts {...props} />
    } />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
