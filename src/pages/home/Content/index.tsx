import React from 'react';

import { Carousel } from 'antd';

import { SubContent } from '../Components/index';

import { AdContent } from '../../../components/ad';

interface IContent {
    carouselData:string[];
}
const Content = (props:IContent) => {
    let href = 'https://www.aliyun.com/minisite/goods?userCode=1naalk9l';
    let adImgUrl = 'https://img.alicdn.com/tfs/TB1dGCQbA9l0K4jSZFKXXXFjpXa-2360-160.png';
    return (
        <>
            <div className="blog-margin-bottom-10 blog-height-100px">
                <Carousel autoplay>
                    {(props.carouselData || []).map(item => {
                        return <AdContent url={item} adStyle={'blog-width-100 blog-height-250px'}/>
                    })}
                </Carousel>
            </div>
            <div>
                <SubContent info="writeDown" />
                <AdContent href = {href} url = {adImgUrl} adStyle='blog-width-100 blog-margin-top-10 blog-margin-bottom-10'/>
                <SubContent info="lightYear" />
                <SubContent info="technicalTalk" />
                <SubContent info="WebsiteBuilding" />
            </div>
        </>
    );
};

export default Content;
