import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("ODYSSEY_INIT_SEQUENCE: COMMENCING");
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("ODYSSEY_FATAL: ROOT_NOT_FOUND");
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
console.log("ODYSSEY_INIT_SEQUENCE: COMMITTED");
