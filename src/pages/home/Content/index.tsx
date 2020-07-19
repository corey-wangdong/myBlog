import React from 'react';

import { Carousel } from 'antd';

import { SubContent } from '../Components/index';

import { Ad } from '../../../components/index';
import AdImg from '../../../images/timg1.jpg';
// https://img.alicdn.com/tfs/TB1dGCQbA9l0K4jSZFKXXXFjpXa-2360-160.png
const Content = () => {
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
            <div className="coontent-banner">
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
            <div>
                <SubContent info="writeDown" />
                <Ad info={adInfomation(AdImg)} />
                <SubContent info="lightYear" />
                <SubContent info="technicalTalk" />
                <SubContent info="WebsiteBuilding" />
            </div>
        </>
    );
};

export default Content;
