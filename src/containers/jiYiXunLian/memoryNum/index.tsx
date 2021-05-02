import React from 'react';

export const MemoryNum = (props: any) => {
  // onchange
  const handleClick = (e: any) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target['data-name']);
    console.log(e.target.value);
    props.onchange('num');
  };
  return (
    <div
      data-name="num"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      数字记忆
    </div>
  );
};
