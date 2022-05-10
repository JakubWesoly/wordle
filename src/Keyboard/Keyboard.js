import React, { useEffect } from 'react';

const Keyboard = (props) => {
  const alphabet = 'QWERTYUIOPASDFGHJKLZ⌫XCVBNM¬'.split('');

  const { g, y, b, w, reset } = props;

  useEffect(() => {
    if (g.length > 0) {
      g.forEach((value) => {
        document
          .querySelectorAll('.key')
          [alphabet.indexOf(w[value])].classList.add('greenKey');
      });
    }
  }, [g]);

  useEffect(() => {
    if (y.length > 0) {
      y.forEach((value) => {
        document
          .querySelectorAll('.key')
          [alphabet.indexOf(w[value])].classList.add('yellow');
      });
    }
  }, [y]);

  useEffect(() => {
    if (b.length > 0) {
      b.forEach((value) => {
        document
          .querySelectorAll('.key')
          [alphabet.indexOf(w[value])].classList.add('black');
      });
    }
  }, [b]);

  useEffect(() => {
    document.querySelectorAll('.key').forEach((value) => {
      value.classList = 'key';
    });
  }, [reset]);

  return (
    <div className='keyboard'>
      {alphabet.map((element) => (
        <div
          className='key'
          key={element}
          onClick={() => props.handleClick(element)}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
