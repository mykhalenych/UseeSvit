import React from 'react';
import ReactDOM from 'react-dom/client';

import './common/i18n';

import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
