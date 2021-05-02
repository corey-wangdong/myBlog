import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
} from 'react-router-dom';

import '../css/title.scss';

interface ITitle {
  blogName: string;
  blogTitle: any[];
}
const Title = (props: ITitle) => {
  const blogTitle = props.blogTitle || [];

  return (
    <>
      <div className="main-nav-title">
        <div className="main-nav-title-info">{props.blogName || ''}</div>
        {blogTitle.length > 0 &&
          blogTitle.map((item: any) => {
            return (
              <div key={item.id}>
                <Link
                  to={item.link}
                  activeClassName="title-active"
                  href={item.link || ''}
                >
                  {item.title}
                  <TitleList
                    id={item.id}
                    childData={item.child}
                    link={item.link}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

const TitleList = (props: any) => {
  const childData = props.childData || [];

  return (
    <>
      <ul>
        {childData.length > 0 &&
          childData.map((item: any) => {
            return (
              <li key={item.id}>
                <Link to={props.link + item.link}>{item.subTitle}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Title;
