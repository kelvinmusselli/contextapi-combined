import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { debugContextDevtool } from 'react-context-devtool';

const containerPage = document.getElementById('root');

ReactDOM.render(<App />,containerPage);

debugContextDevtool(containerPage)
