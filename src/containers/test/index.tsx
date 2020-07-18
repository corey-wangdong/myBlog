import React from 'react';

interface IgetProps {
    text: string;
    content: Array<string>;
}

const Test = (props: IgetProps) => {
    return (
        <div>
            <h2>{props.text}</h2>
            <h2>{props.content}</h2>
        </div>
    );
};

export default Test;
