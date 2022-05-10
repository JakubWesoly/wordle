import React, { useEffect, useState, useRef } from 'react';

const Table = (props) => {
  const [words, setWords] = useState([
    '     ',
    '     ',
    '     ',
    '     ',
    '     ',
  ]);

  const { currentWord, finished, reset, g, y, b } = props;

  useEffect(() => {
    const buffer = [...words];
    buffer[finished] = currentWord;
    setWords(buffer);
  }, [finished, currentWord]);

  useEffect(() => {
    if (g.length > 0) {
      // console.log('GREEN: ' + g);
      [...currentWord].forEach((value, index) => {
        if (g.includes(index))
          document
            .querySelectorAll('.letter')
            [finished * 5 + index].classList.add('green');
      });
    }
  }, [g]);

  useEffect(() => {
    if (y.length > 0) {
      [...currentWord].forEach((value, index) => {
        if (y.includes(index))
          document
            .querySelectorAll('.letter')
            [finished * 5 + index].classList.add('yellow');
      });
    }
  }, [y]);

  useEffect(() => {
    if (b.length > 0) {
      [...currentWord].forEach((value, index) => {
        if (b.includes(index))
          document
            .querySelectorAll('.letter')
            [finished * 5 + index].classList.add('black');
      });
    }
  }, [b]);

  useEffect(() => {
    document.querySelectorAll('.letter').forEach((value) => {
      value.classList = 'letter';
      value.innerHTML = '';
    });
  }, [reset]);
  return (
    <div className='table'>
      <div className='row'>
        <div className='letter'>{words[0][0] || ''}</div>
        <div className='letter'>{words[0][1] || ''}</div>
        <div className='letter'>{words[0][2] || ''}</div>
        <div className='letter'>{words[0][3] || ''}</div>
        <div className='letter'>{words[0][4] || ''}</div>
      </div>
      <div className='row'>
        <div className='letter'>{words[1][0] || ''}</div>
        <div className='letter'>{words[1][1] || ''}</div>
        <div className='letter'>{words[1][2] || ''}</div>
        <div className='letter'>{words[1][3] || ''}</div>
        <div className='letter'>{words[1][4] || ''}</div>
      </div>
      <div className='row'>
        <div className='letter'>{words[2][0] || ''}</div>
        <div className='letter'>{words[2][1] || ''}</div>
        <div className='letter'>{words[2][2] || ''}</div>
        <div className='letter'>{words[2][3] || ''}</div>
        <div className='letter'>{words[2][4] || ''}</div>
      </div>
      <div className='row'>
        <div className='letter'>{words[3][0] || ''}</div>
        <div className='letter'>{words[3][1] || ''}</div>
        <div className='letter'>{words[3][2] || ''}</div>
        <div className='letter'>{words[3][3] || ''}</div>
        <div className='letter'>{words[3][4] || ''}</div>
      </div>
      <div className='row'>
        <div className='letter'>{words[4][0] || ''}</div>
        <div className='letter'>{words[4][1] || ''}</div>
        <div className='letter'>{words[4][2] || ''}</div>
        <div className='letter'>{words[4][3] || ''}</div>
        <div className='letter'>{words[4][4] || ''}</div>{' '}
      </div>
    </div>
  );
};

export default Table;
