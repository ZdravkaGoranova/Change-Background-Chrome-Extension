
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const onClick = async () => {
  if (typeof chrome !== 'undefined' && chrome.tabs) {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log('Active tab:', tab);
  } else {
    console.error(
      'Chrome API is not available. Make sure this is running as a Chrome Extension.',
    );
  }
};



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
     
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
