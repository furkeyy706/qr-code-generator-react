import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState('');
  const [word, setWord] = useState('');
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState('ffffff');
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="main-container">
      <h1>Qr Code Generator</h1>
      <div className="input-container">
        <div className="gen">
          <input
            type="text"
            onChange={e => {
              setTemp(e.target.value);
            }}
            placeholder="Enter text to Qr code"
          />

          <button className="generate-button" onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra-features">
          <h5>Background Color:</h5>
          <input
            type="color"
            onChange={e => {
              setBgColor(e.target.value.substring(1));
            }}
          />
          <h5>Dimension:</h5>
          <input
            type="range"
            min="200"
            max="600"
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}
export default App;
