import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReadUpdateDelete from '../Components/ReadUpdateDelete'
import Create from '../Components/Create'

const Routes = () => {
    return(
    <div>
        <Switch>
            <Route exact path='/' component={ReadUpdateDelete} />
            <Route path='/create' component={Create} />
        </Switch>
    </div>
    )}

export default Routes