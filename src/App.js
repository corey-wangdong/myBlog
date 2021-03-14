import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { fetchBlogData } from './redux/actions/fetchInitData';
import { connect } from 'react-redux';

import { Title } from './components';
import { Bottom } from './components';

import Home from './containers/home';
import LuoBiQingXin from './containers/luobiqingxin';

import './App.css';

const App = (props) => {
    console.log('props+++++', props);
  const initData = props.initData.data;
  const errMsg = props.initData.errMsg;
  const isLoading = props.initData.isLoading;

    return (
        <>
        {isLoading ? (
        <div>正在加载中...</div>
      ) : errMsg && initData.length === 0 ? (
        <div>{errMsg}</div>
      ) : (
        <Router>
            <div className="blog-wrap">
                <Title blogName = {initData &&initData.blogName || ''} blogTitle = {initData&&initData.blogTitle || []}/>
                <Switch>
                    <Route path="/home">
                        <Home adContent = {initData&&initData.adContent || {}} bannerContent = {initData&&initData.bannerContent || []}/>
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
      )}
            
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
const mapStateToProps = (state) => {
    return { initData: state.initData };
  };
  const mapDispatchToProps = (dispatch) => {
    return () => dispatch(fetchBlogData());
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
