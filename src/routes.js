import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Articles from './Components/Articles';
import Comment from './Components/Comment';


const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route  path='/Header' component={Header}/>
    <Route  path='/Articles' component={Articles}/>
    <Route  path='/Comment' component={Comment}/>
    </ Switch>
    </BrowserRouter>
);

export default Routes;



