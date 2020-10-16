import React from 'react';
import classNames from 'classnames';
import '../css/ad.scss';

interface IAd {
    url:string;
    href?:string;
    alt?:string;
    adStyle?:string;
}
export const AdContent = (props:IAd) => {
    return (
        <>

            <a href={props.href}>
                    <img className={classNames(props.adStyle,{
                    'blog-width-100': !props.adStyle
                    })}  src={props.url} alt={props.alt}/>
                </a>
            
        </>
    );
};
