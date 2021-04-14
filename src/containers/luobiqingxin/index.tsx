import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// 引入子页面
import GuShi from './gushi/index';
import ShiGe from './shige/index';
import ShuXiang from './shuxiang/index';

const LuoBiQingXin = (props: any) => {
  return (
    <>
      {/* <Router> */}
      <div className="">
        <Switch>
          <Route path="/qingxin/shuxiang">
            <ShuXiang />
          </Route>
          <Route path="/qingxin/shige">
            <ShiGe />
          </Route>
          <Route path="/qingxin/gushi">
            <GuShi />
          </Route>
          <Redirect from="/qingxin/" to="/qingxin/shuxiang" />
        </Switch>
      </div>
      {/* </Router> */}
    </>
  );
};

export default LuoBiQingXin;
