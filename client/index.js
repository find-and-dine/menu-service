import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import Menu from './components/Menu';
import './styles.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Menu id={path.basename(window.document.URL)} />, document.getElementById('menu'));
