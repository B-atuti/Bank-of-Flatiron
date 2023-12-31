import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/App';
import './index.css';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(<App />);
