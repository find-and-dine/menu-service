import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import App from './components/App';
import './styles.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App id={path.basename(window.document.URL)} />, document.getElementById('app'));
