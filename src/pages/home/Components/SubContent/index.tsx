import React, { useState, useEffect } from 'react';

import '../../../css/components/subContent.scss';
interface ITitleText {
    id: string;
    value: string;
    path: string;
}
const SubContent = (props: any) => {
    const [titleText, setTitleText] = useState([{}]);
    const [title, setTitle] = useState({ id: '', value: '' });
    const [titleTextContent, setTitleTextContent] = useState('');

    useEffect(() => {
        if (props.info === 'writeDown') {
            setTitle({ id: '2', value: '落笔清心' });
            setTitleTextContent('落笔清心');
            setTitleText([
                { id: '2-0', value: '书香浓墨', path: '/qingxin/shuxiang' },
                { id: '2-1', value: '诗歌情调', path: '/qingxin/shige' },
                { id: '2-2', value: '故事连载', path: '/qingxin/gushi' },
            ]);
        } else if (props.info === 'lightYear') {
            setTitle({ id: '3', value: '淡淡流年' });
            setTitleTextContent('淡淡流年');
            setTitleText([
                { id: '3-0', value: '成长路上', path: '/liunian/chengzhang' },
                { id: '3-1', value: '吃喝玩乐', path: '/liunian/chihe' },
                { id: '3-2', value: '心语杂谈', path: '/liunian/xinyu' },
            ]);
        } else if (props.info === 'technicalTalk') {
            setTitle({ id: '4', value: '技术之谈' });
            setTitleTextContent('技术之谈');
            setTitleText([]);
        } else if (props.info === 'WebsiteBuilding') {
            setTitle({ id: '5', value: '网站建设' });
            setTitleTextContent('网站建设');
            setTitleText([]);
        }
    }, [props.info]);

    const handleSubContent = (e: any) => {
        let currentId = e.target.id || '';
        console.log(currentId);
        if (currentId === '2') {
            setTitleTextContent('落笔清心');
        } else if (currentId === '2-0') {
            setTitleTextContent('书香浓墨');
        } else if (currentId === '2-1') {
            setTitleTextContent('诗歌情调');
        } else if (currentId === '2-2') {
            setTitleTextContent('故事连载');
        } else if (currentId === '3') {
            setTitleTextContent('淡淡流年');
        } else if (currentId === '3-0') {
            setTitleTextContent('成长路上');
        } else if (currentId === '3-1') {
            setTitleTextContent('吃喝玩乐');
        } else if (currentId === '3-2') {
            setTitleTextContent('心语杂谈');
        }
    };
    return (
        <>
            <div className="sub-content">
                <div className="sub-content-title">
                    <div id={title.id} className="content-title-one" onClick={handleSubContent}>
                        {(title && title.value && title.value) || ''}
                    </div>
                    {titleText &&
                        titleText.length > 0 &&
                        titleText.map((item: any) => {
                            return (
                                <div id={item.id} onClick={handleSubContent}>
                                    {item.value}
                                </div>
                            );
                        })}
                </div>
                <div className="sub-content-title-content">{titleTextContent || ''} 你好骚啊</div>
            </div>
        </>
    );
};
export default SubContent;
