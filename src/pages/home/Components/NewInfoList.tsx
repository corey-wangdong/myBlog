import React from 'react';
import classNames from 'classnames'
const NewInfoList = (titleInfo:any) => {

    let tempNewInfoListData = [
        {
            id:'', 
            href:'https://www.yangqq.com/news/s/1074.html', 
            title:'记录下我第一次在阿里云618活动做直播的感受和心得...',
            content:'先说说我吧。我性格腼腆，不大爱说话，这个跟我的工作有很大的关系，刚毕业那会儿我做的销售，很爱说，也很开朗。但是越到后面，越觉得销售对于一个女生来说太吃力，所以选择了本专业相关'
        },
        {
            id:'', 
            href:'https://www.yangqq.com/news/s/1074.html', 
            title:'我仅仅是一个“草根站长”',
            content:'虽然也经历了被人质疑、嘲笑和不屑。但是我始终坚信自己的选择是正确的。并把他们的这些不屑变成更强的动力，去追逐成功。网上很多说个人博客末落了，说的是第三方博客平台，因为个人建独立博客已经不再像以前那么困难，越来越多的独立个人博客开始出现，打造自媒体平台。'
        },
        {
            id:'', 
            href:'https://www.yangqq.com/news/s/1074.html', 
            title:'世界上根本没有感同身受这回事',
            content:'可是，当我也被人质疑，被人评价说，“作品过时”，“前端不怎么样”时，我表现得比他还要糟糕，我会生气，我会因为句话不开心，睡不好觉，甚至质疑自己，是不是就真的过时了？是不是我的前端就真的不怎么样？我需要很长一段时间来平复。'
        },
        {
            id:'', 
            href:'https://www.yangqq.com/news/s/1074.html', 
            title:'个人博客建站初衷”',
            content:'在没踏上这条路之前，还是学生的时候，因为看到一部电视剧《一帘幽梦》里面女主角紫菱建了一个属于自己的个人网站，她把自己喜欢的，梦想的地方放到网站上，那个时候我就想像里面的紫菱一样，用网站来规划一个属于自己梦的地方。大学的时候虽然没认真对待过专业课，但是对于建这样一个网站，对我来说，是一个梦，也是一个目标。'
        },
        {
            id:'', 
            href:'https://www.yangqq.com/news/s/1074.html', 
            title:'兴趣支撑梦想，兴趣是支撑我自己前行的动力”',
            content:'在没有学习前端设计，在没有自己博客之前，我的兴趣爱好很多，比如阅读，看电影，爬山等。这些是生活当中自己排遣娱乐的一种方式。明明觉得自己很喜欢，但有时候还是会半途而废，其实，有兴趣只是起点，保有持久兴趣才是关键。'
        }
    ]

    const handleShowInfo = (e:any) => {
        console.log(e.target)

        let event = e || window.event;
        let target = event.target || event.srcElement;
        if(target.nodeName.toLowerCase() === 'li') {
            // target.style.background = "red";
        }
        
    }
    const handleHideInfo = (e:any) => {
        let event = e || window.event;
        let target = event.target || event.srcElement;
        if(target.nodeName.toLowerCase() === 'li') {
            target.style.background = "#fff";
        }
        
    };
    return (
        <ul className="blog-new-info-list" onMouseOver={handleShowInfo} onMouseLeave = {handleHideInfo}>
            {
                (tempNewInfoListData || []).map((item,index) => {
                    return (
                        <li className={classNames('blog-new-info-list-item',{'blog-new-info-list-item-first':index===1})}>
                            <i></i>
                            <a className='blog-color-black' href={item.href}>{item.title}</a>
                            <p>{item.content}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NewInfoList;