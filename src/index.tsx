import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <p>Am I working?</p>;
}

const appElement = document.getElementById('app');

if (!appElement) {
  throw Error('No app element in document!');
}

const root = createRoot(appElement);
root.render(<App />);
