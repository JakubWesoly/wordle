import React from 'react';

const Row = (props) => {
  return (
    <div className='row'>
      <div className='letter'>{props.w[0]}</div>
      <div className='letter'>{props.w[1]}</div>
      <div className='letter'>{props.w[2]}</div>
      <div className='letter'>{props.w[3]}</div>
      <div className='letter'>{props.w[4]}</div>
    </div>
  );
};

export default Row;
