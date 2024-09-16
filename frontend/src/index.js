import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { worker } from './mocks/browser';

async function prepare() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser')
    return worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));

prepare().then(() => {
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();