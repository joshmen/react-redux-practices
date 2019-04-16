import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch }from 'react-router-dom';
import Results from './components/results';
import Details from './components/details';
import store from './redux/store';

const Root = (
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results}></Route>
                <Route path = "/details/:itemId" component = {Details}></Route>
                <Redirect from = "/" to = "/results"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDom.render(Root, document.getElementById('root'));