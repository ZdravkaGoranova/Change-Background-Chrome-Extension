import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#ffffff');
  const onClick = async () => {
    let [tab] = await window.chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    window.chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [color],
      func: (color) => {
        // alert('Hello from my extention!');
        document.body.style.backgroundColor = color;
      },
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/dropper.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Change Background </h1>
      <h4>
        <i>Chrome Extension</i>
      </h4>
      <div
        className="card"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '15px',
          padding: '10px',
        }}
      >
        <input
          type="color"
          onChange={(e) => {
            setColor(e.currentTarget.value);
          }}
          value={color}
        />
        <button id="clickButton" onClick={onClick}>
          Change Color
        </button>
      </div>
    </>
  );
}

export default App;
