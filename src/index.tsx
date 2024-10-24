import React from 'react';
import ReactDOM from 'react-dom/client';
import {Annotorious} from "@annotorious/react";

import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Annotorious>
        <App />
    </Annotorious>
);
