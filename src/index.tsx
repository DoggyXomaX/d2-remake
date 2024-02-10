import { createRoot } from 'react-dom/client';

function App() {
  return <p>Am I working?</p>;
}

const appElement = document.getElementById('app');

if (appElement) {
  const root = createRoot(appElement);
  root.render(<App />);
} else {
  console.error('No app element in document');
}
