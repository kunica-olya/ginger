import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import App from './ClassApp';
import './assets/fonts/calibri.ttf';
import './assets/fonts/calibri_bold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

