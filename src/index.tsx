import React from 'react';
import ReactDOM from 'react-dom/client';
import {Annotorious} from "@annotorious/react";

import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <Annotorious>
            <App />
        </Annotorious>
    </Provider>
);
