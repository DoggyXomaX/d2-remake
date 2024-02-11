import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './Components/Game';

const appElement = document.getElementById('app');

if (!appElement) {
  throw Error('No app element in document!');
}

const root = createRoot(appElement);
root.render(<Game />);
