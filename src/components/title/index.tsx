import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, NavLink as Link } from 'react-router-dom';

import '../css/title.scss';

const Title = () => {
    let titleText = [
        { id: '1', value: '首页', path: '/home' },
        { id: '2', value: '落笔清心', path: '/qingxin' },
        { id: '3', value: '淡淡流年', path: '/liunian' },
        { id: '4', value: '网站建设', path: '/wangjian' },
        { id: '5', value: '技术之谈', path: '/jitan' },
    ];
    return (
        <>
            <div className="main-nav-title">
                <div className="main-nav-title-info">轻语传言个人博客</div>
                {titleText &&
                    titleText.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link
                                    to={item.path}
                                    activeClassName="title-active"
                                    href={item.path || ''}
                                >
                                    {item.value}
                                    <TitleList id={item.id} />
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

const TitleList = (props: any) => {
    const [titleText, setTitleText] = useState([{ id: '', value: '', path: '' }]);
    useEffect(() => {
        if (props.id === '2') {
            setTitleText([
                { id: '2-0', value: '书香浓墨', path: '/qingxin/shuxiang' },
                { id: '2-1', value: '诗歌情调', path: '/qingxin/shige' },
                { id: '2-2', value: '故事连载', path: '/qingxin/gushi' },
            ]);
        } else if (props.id === '3') {
            setTitleText([
                { id: '3-0', value: '成长路上', path: '/liunian/chengzhang' },
                { id: '3-1', value: '吃喝玩乐', path: '/liunian/chihe' },
                { id: '3-2', value: '心语杂谈', path: '/liunian/xinyu' },
            ]);
        } else {
            setTitleText([]);
        }
    }, [props.id]);

    const handleTitleText = (value: any) => {
        console.log(value);
    };

    return (
        <>
            <ul>
                {titleText &&
                    titleText.length > 0 &&
                    titleText.map((item: any) => {
                        return (
                            <li
                                key={item.id}
                                onClick={() => {
                                    handleTitleText(item.value);
                                }}
                            >
                                <Link to={item.path}>{item.value}</Link>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Title;
