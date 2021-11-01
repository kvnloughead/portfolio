import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import reportWebVitals from './reportWebVitals';

import App from './components/app/app';
import './index.css';
import {
  Anchor, Code, InlineCode, Paragraph,
} from './components/shared/shared';

const components = {
  p: Paragraph,
  inlineCode: InlineCode,
  code: Code,
  a: Anchor,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MDXProvider components={components}>
        <App />
      </MDXProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
