import React from 'react';
import '../css/ad.css';

const Ad = (props) => {
    console.log(props);
    return (
        <>
            <div className="ad-style">{props.info}</div>
        </>
    );
};

export default Ad;
