import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Title } from './components';
import { Bottom } from './components';

import Home from './pages/home';
import LuoBiQingXin from './pages/luobiqingxin';

import './App.css';
const App = (props) => {
    return (
        <>
            <Router>
            <div className="blog-wrap">
                    <Title />
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/qingxin">
                            <LuoBiQingXin />
                        </Route>
                        <Route path="/liunian">
                            <About />
                        </Route>
                        <Redirect from="/" to="/home" />
                    </Switch>
                    <Bottom />
                </div>
            </Router>
        </>
    );
};

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

export default App;
