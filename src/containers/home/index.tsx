import React, { useEffect } from 'react';
import Content from './Content/index';

import { connect } from 'react-redux';
import { fetchBlogData } from '../../redux/actions/fetchInitData';

import '../css/home/home.scss';

import { AdContent } from '../../components/ad';

const Home = (props: any) => {
  console.log('props+++++', props);
  let href = 'https://www.aliyun.com/minisite/goods?userCode=1naalk9l';
  let adImgUrl =
    'https://img.alicdn.com/tfs/TB1dGCQbA9l0K4jSZFKXXXFjpXa-2360-160.png';
  let carouselData = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602870911925&di=89dc738caebd4546b2f4f06959cf6560&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602870911925&di=08b11998fd1046251ff9963c8589737d&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602870995282&di=5155d30c8e2481faef818113ac7956dc&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201309%2F03%2F150928ozb82vyzhzsv96ov.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602870995282&di=838f5c5a8209c1168192c3f94cdd9718&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
  ];
  return (
    <>
      <div>
        <AdContent
          href={href}
          url={adImgUrl}
          adStyle="blog-width-100 blog-margin-top-10 blog-margin-bottom-10"
        />
        <div className="blog-display-flex-justify-content">
          <div className="blog-width-70">
            <Content carouselData={carouselData} />
          </div>
          <div className="blog-width-28">
            <div className="blog-color-white blog-bg-color-black blog-border-radius-4 blog-margin-bottom-12 blog-padding-20">
              <div className="blog-font-size-20 blog-color-white">
                轻语传言个人名片
              </div>
              <ul>
                <li>职业:程序员，WEB前端开发工程师</li>
                <li>现居:上海浦东新区</li>
                <li>Email: woishb@163.com</li>
              </ul>
              <div className="blog-font-size-16">
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

const mapStateToProps = (state: any) => {
  console.log('state____', state);
  return { initData: state };
};
const mapDispatchToProps = (dispatch: any) => {
  return dispatch({ type: 'CHANGE_COLOR' });
};

export default connect(mapStateToProps, { fetchBlogData })(Home);
