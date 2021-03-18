import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/App';
import reportWebVitals from './reportWebVitals';
import { Layout } from "antd";

import 'antd/dist/antd.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Layout>
              <App />
          </Layout>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
