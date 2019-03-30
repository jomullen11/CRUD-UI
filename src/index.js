import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Nav from './Navigation/Nav'
import Routes from './Navigation/Route'
import './index.css'
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component{
    render() {
    return(
    <div>
        <Nav />
        <Routes />
    </div>
    )
    }}

ReactDOM.render(
<Router>
    <App />
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
