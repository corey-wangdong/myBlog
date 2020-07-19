import React from 'react';
import '../css/ad.scss';

const Ad = (props: any) => {
    console.log(props);
    return (
        <>
            <div className="ad-style">{props.info}</div>
        </>
    );
};

export default Ad;
