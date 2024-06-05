import React, { useState } from 'react';
import './App.css';
import { LoremIpsum } from 'react-lorem-ipsum';

function App() {
  const [count, setCount] = useState(0);
  const [para, setPara] = useState([]);

  function generateParagraphs() {
    if (count <= 0) {
      alert("Value should be a positive number");
    } else {
      let p = [];
      for (let i = 1; i <= count; i++) {
        p.push(
          <p key={i}>
            {i}: <LoremIpsum p={1} />
          </p>
        );
      }
      setPara(p);
    }
  }

  return (
    <>
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <div className="text">
        <label>Paragraphs:</label>
        <input type="number" onChange={(e) => setCount(e.target.value)} />
        <button onClick={generateParagraphs}>GENERATE</button>
      </div>

      <div className="paras">{para}</div>
    </>
  );
}

export default App;
