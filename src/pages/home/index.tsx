import React from 'react';

import { Ad } from '../../components';
import Content from './Content/index';

import '../css/home/home.scss';

import AdImg from '../../images/timg1.jpg';

const Home = () => {
    const adInfomation = (url: string) => {
        return (
            <>
                <a href="https://www.aliyun.com/minisite/goods?userCode=1naalk9l">
                    <img className="ad-img-style" src={url} />
                </a>
            </>
        );
    };
    return (
        <>
            <div>
                <Ad
                    info={adInfomation(
                        'https://img.alicdn.com/tfs/TB1dGCQbA9l0K4jSZFKXXXFjpXa-2360-160.png'
                    )}
                />
                <div className="content">
                    <div className="content-left">
                        <Content />
                    </div>
                    <div className="content-right">
                        <div className="right-business-card">
                            <div className="business-card-title">轻语传言个人名片</div>
                            <ul>
                                <li>职业:程序员，WEB前端开发工程师</li>
                                <li>现居:上海浦东新区</li>
                                <li>Email: woishb@163.com</li>
                            </ul>
                            <div className="business-card-bottom">
                                以心谈语，传递点点足迹；以迹为生，品味百般事态!
                            </div>
                        </div>
                        <div className="right-business-card"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
