import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './index.css';
import Keyboard from './Keyboard/Keyboard';
import Table from './Table/Table';

const App = () => {
  const fetchWord = () => {
    return fetch(
      'http://localhost:4000/words?id=' + Math.floor(Math.random() * 2499)
    )
      .then((res) => res.json())
      .then((data) => {
        return data[0]['word'];
      });
  };

  const checkWord = (test) => {
    return fetch('http://localhost:4000/words?word=' + test)
      .then((res) => res.json())
      .then((data) => {
        return data.length === 0;
      });
  };

  const [password, setPassword] = useState('');
  const [word, setWord] = useState('');
  const [finished, setFinished] = useState(0);
  const [green, setGreen] = useState([]);
  const [yellow, setYellow] = useState([]);
  const [black, setBlack] = useState([]);

  useEffect(() => {
    fetchWord().then((res) => setPassword(res));
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleLetter);

    return () => {
      window.removeEventListener('keydown', handleLetter);
    };
  });

  const handleLetter = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90 && word.length < 5)
      setWord(word + e.code[e.code.length - 1]);
    else if (e.keyCode === 8) setWord(word.substring(0, word.length - 1));
    else if (e.keyCode === 13 && word.length === 5) {
      checkWord(word).then((res) => {
        if (!res) {
          alert('ZAKOŃCZONO, SŁOWO: ' + word);
          setGreen([]);
          setYellow([]);
          setBlack([]);

          [...word].forEach((value, index) => {
            if (value === password[index]) {
              // console.log(`GREEN: [${index}, ${value}]`);
              setGreen([...green, index]);
            } else if (password.includes(value)) {
              // console.log(`YELLOW: [${index}, ${value}]`);
              setYellow([...yellow, index]);
            } else {
              // console.log(`BLACK: [${index}, ${value}]`);
              setBlack([...black, index]);
            }
          });

          setFinished(finished + 1);
          setWord('');

          if (word === password) {
            reset();
          } else if (finished === 4) {
            reset();
          }
        } else {
          alert('Invalid word!');
        }
      });
    }
  };

  const reset = () => {
    setGreen([]);
    setYellow([]);
    setBlack([]);
    setFinished(0);
    setWord('');
    fetchWord();
  };

  const handleKeyboard = (letter) => {
    const obj = {
      code: '',
      keyCode: 0,
    };
    if (letter === '⌫') {
      obj.keyCode = 8;
    } else if (letter === '¬') {
      obj.keyCode = 13;
    } else {
      obj.code = letter;
      obj.keyCode = letter.charCodeAt(0);
    }

    handleLetter(obj);
  };

  return (
    <div style={{ display: 'grid' }}>
      <Table
        currentWord={word}
        finished={finished}
        g={green}
        y={yellow}
        b={black}
        reset={password}
      />
      <Keyboard
        w={word}
        g={green}
        y={yellow}
        b={black}
        reset={password}
        handleClick={handleKeyboard}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
